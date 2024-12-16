import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { Col, Row, Button, InputGroup, Form } from 'react-bootstrap';
import { ProductComponent } from '../../components/ProductComponent/ProductComponent';

interface Product {
    id: number;
    brand: string;
    model: string;
    ram: string;
    storage: string;
    price: number;
}

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [errorServer, setErrorServer] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const itemsPerPage = 3;

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (response.status === 404) {
                    setErrorServer('Resource not found (404)!');
                }
                if (!response.ok) {
                    setErrorServer(`Server responded with status ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (errorServer) {
        return <p>{errorServer}</p>;
    }
    if (loading) {
        return <p>Betöltés...</p>;
    }
    if (error) {
        return <p>Hiba történt: {error}.</p>;
    }

    // Lapozás a szűrt termékek alapján
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <Container className='my-4'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="search-icon">🔍</InputGroup.Text>
                <Form.Control
                    placeholder="Keressen termék névre"
                    aria-label="Search"
                    aria-describedby="search-icon"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </InputGroup>
            <h1 className='text-center mb-5'>Termékek</h1>
            <Row>
                {currentProducts.map((product) => (
                    <Col key={product.id} md={4}>
                        <ProductComponent
                            {...product}
                            page="list"
                        />
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-between mt-4">
                <Button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    Előző
                </Button>

                <Button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Következő
                </Button>
            </div>
        </Container>
    );
};

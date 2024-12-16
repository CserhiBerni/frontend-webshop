import { Card, Button } from "react-bootstrap";

interface ProductCardProps {
    id: number;
    brand: string;
    model: string;
    ram: string; 
    storage: string; 
    price: number;
    page?: string; 
}

export const ProductComponent = (props: ProductCardProps) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title>{props.brand} {props.model}</Card.Title>
                <Card.Text>
                    <strong>RAM:</strong> {props.ram} <br />
                    <strong>Storage:</strong> {props.storage} <br />
                    <strong>Ár:</strong> ${props.price}
                </Card.Text>
                {props.page === "delete" && (
                    <Button variant="danger">Törlés</Button>
                )}
            </Card.Body>
        </Card>
    );
};

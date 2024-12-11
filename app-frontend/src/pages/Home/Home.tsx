import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

export const Home: React.FC = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  if (!userContext || !cartContext) {
    throw new Error('Contexts must be used within their respective providers');
  }

  const { user } = userContext;

  const navigateTo = (path: string) => {
    alert(`Navigating to ${path}`);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Frontend Webshop</h1>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>/products</Card.Title>
              <Card.Text>
                Termékek listázása kártyákban. Minden terméknél található "Cart" gomb, amelyre
                kattintva az adott termék a kosárba kerül (csak bejelentkezés után).
              </Card.Text>
              <Card.Text>
                Rendezés, keresés és lapozás funkciók elérhetők a termékek listázásánál.
              </Card.Text>
              {user && (
                <Button variant="primary" onClick={() => navigateTo('/products')}>
                  Termékek megtekintése
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>/cart</Card.Title>
              <Card.Text>
                A kosárban lévő termékek listázása kártyákban. Lehetőség van termék eltávolítására a kosárból, illetve
                a teljes kosár törlésére.
              </Card.Text>
              {user && (
                <Button variant="primary" onClick={() => navigateTo('/cart')}>
                  Kosár megtekintése
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>/register & /login</Card.Title>
              <Card.Text>
                Felhasználók regisztrációja és bejelentkezése az alkalmazás használatához. A regisztráció
                és bejelentkezés az órán tanult szempontok szerint lett megvalósítva.
              </Card.Text>
              <Button variant="primary" onClick={() => navigateTo('/register')}>
                Fiók létrehozása
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>/profile</Card.Title>
              <Card.Text>
                Csak bejelentkezés után érhető el. Lehetőség van a felhasználónév módosítására
                (létezőre nem módosítható) és a jelszó módosítására (6 karakter, kis- és nagybetű, szám).
              </Card.Text>
              {user && (
                <Button variant="primary" onClick={() => navigateTo('/profile')}>
                  Profil megtekintése
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
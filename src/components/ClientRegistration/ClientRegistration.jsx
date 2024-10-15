import { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';

const ClientRegistration = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.nome) {
            formErrors.nome = 'Name is required.';
        }
        if (!formData.telefone) {
            formErrors.telefone = 'Phone is required.';
        }
        if (!formData.email) {
            formErrors.email = 'E-mail is required.';
        }
        if (!formData.mensagem) {
            formErrors.mensagem = 'Message is required..';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true); // Inicia o carregamento

            emailjs.send('douglasjose3@gmail.com', 'Z5exqV5cN9UkNTiW1KDN9')
                .then(() => {
                    // console.log('Sucesso!', response.status, response.text);
                    setSuccessMessage('Formulário enviado com sucesso!');
                    setFormData({
                        nome: '',
                        telefone: '',
                        email: '',
                        mensagem: ''
                    });
                    setErrors({});
                }, () => {
                    // console.error('Falha ao enviar formulário:', error);
                    alert('Ocorreu um erro ao enviar o formulário.');
                })
                .finally(() => {
                    setLoading(false); // Finaliza o carregamento
                });
        }
    };

    return (
        <Container className='cardBg mb-5 ps-3 pe-3'>
            <h1 className="title text-center pt-5">Request your quote!</h1>
            <Form onSubmit={handleSubmit}>
                <Row className='ps-2 pe-2'>
                    <Col lg={6}>
                        <Form.Group controlId="formNome">
                            <Form.Label className='formBold'>Enter your name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                isInvalid={!!errors.nome}
                            />
                            {errors.nome && <div className="text-danger">{errors.nome}</div>}
                        </Form.Group>

                        <Form.Group controlId="formTelefone">
                            <Form.Label className='formBold'>Enter your phone</Form.Label>
                            <InputMask
                                mask="(999) 999-9999"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                            >
                                {(inputProps) => (
                                    <Form.Control
                                        {...inputProps}
                                        type="tel"
                                        placeholder="(999) 999-9999"
                                        isInvalid={!!errors.nome}
                                    />
                                )}
                            </InputMask>
                            {errors.telefone && <div className="text-danger">{errors.telefone}</div>}
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label className='formBold'>Enter your e-mail</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your e-mail"
                                title="Enter a valid email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                isInvalid={!!errors.email}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group controlId="formMensagem">
                            <Form.Label className='formBold'>Enter your message</Form.Label>
                            <Form.Control
                                as='textarea'
                                name='mensagem'
                                value={formData.mensagem}
                                onChange={handleChange}
                                style={{ width: '100%', height: 210 }}
                                placeholder="Enter your message"
                                isInvalid={!!errors.mensagem}
                            />
                            {errors.mensagem && <div className="text-danger">{errors.mensagem}</div>}
                        </Form.Group>
                    </Col>
                </Row>

                {successMessage && <div className="text-success mb-3">{successMessage}</div>}

                <div className='text-end pt-3 pe-2'>
                    <Button
                        style={{
                            backgroundColor: '#fc3e00',
                            color: 'white',
                            border: 'none',
                            fontWeight: 'bold'
                        }}
                        type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                    </Button>
                </div>

            </Form>
        </Container>
    );
};

export default ClientRegistration;
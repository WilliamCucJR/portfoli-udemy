import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });

  const [emptyInputs, setemptyInputs] = useState(false);
  const [successSendForm, setsuccessSendForm] = useState(false);
  const [errorSendForm, seterrorSendForm] = useState(false);

  const form = useRef();

  const service_id = "portafolio_personal";

  const onSubmit = (e) => {
    //evita recargo de pagina
    e.preventDefault();

    //Validar formulario
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === "" ||
      contactDates.checkedTerms === false
    ) {
      setemptyInputs(true);
    } else {
      emailjs
        .sendForm(
          service_id,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setsuccessSendForm(true);
          },
          (error) => {
            seterrorSendForm(true);
          }
        );
    }

    //Enviar formulario
  };

  return (
    <S.ContainerContact>
      <S.Title>Contactame</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <S.SuccessMessage>El formulario ha sido enviado correctamente</S.SuccessMessage>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Tu Nombre"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Tu Email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Mensaje"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactDates({
                    ...contactDates,
                    checkedTerms: e.target.checked,
                  })
                }
              />
              <span>Aceptar los términos y condiciones</span>
            </S.ContainerConditions>
            <S.Button type="submit">Enviar</S.Button>
          </S.Form>
        )}
        {emptyInputs && (
        <p>Debes llenar todos los campos y aceptar los terminos</p>
      )}
      {errorSendForm && (<S.TextError>Error al enviar el formulario</S.TextError>)}
      </S.ContainerForm>
      
    </S.ContainerContact>
  );
};

export default Contact;

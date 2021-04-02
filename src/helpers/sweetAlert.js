import Swal from "sweetalert2";

export const succesAlert = () => {
  Swal.fire({
    title: "Correo enviado!",
    text: "Pronto nos comunicaremos con usted para brindarle información.",
    icon: "success",
    confirmButtonText: "OK",
  });
};

export const warningAlert = (campo) => {
  Swal.fire({
    title: "Advertencia!",
    text: "Es necesario llenar el campo " + campo + ".",
    icon: "warning",
    confirmButtonText: "OK",
  });
};

export const errorAlert = () => {
  Swal.fire({
    title: "Error!",
    text: "Hubo un error al procesar la solicitud.",
    icon: "error",
    confirmButtonText: "OK",
  });
};

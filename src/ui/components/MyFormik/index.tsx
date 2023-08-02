// Importamos el componente Formik de 'formik' y el esquema de validación Yup.
import { Formik } from 'formik';
import * as Yup from 'yup';

// Definimos una interfaz llamada 'Dato' que describe la configuración de validación para cada campo del formulario.
interface Dato {
  name: string;       // Nombre del campo.
  type: string;       // Tipo de dato del campo ('string', 'number', 'email', 'array').
  required: boolean;  // Indica si el campo es obligatorio (true) o no (false).
}

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
  initialValues: object; // Valores iniciales para el formulario.
  onSubmit: any;         // Función que se ejecutará cuando se envíe el formulario.
  form: any;             // Componente funcional que representa el formulario.
  validation: Dato[];    // Configuración de validación para los campos del formulario.
}

// Declaramos el componente funcional MyFormik, que acepta las propiedades especificadas en la interfaz Props.
const MyFormik = ({ initialValues, onSubmit, form, validation }: Props) => {
  // Función para generar el esquema de validación Yup basado en la configuración proporcionada.
  function generarValidationSchema(validation: Dato[]) {
    let validationSchema: any = {};
  
    validation.forEach((dato) => {
      // Dependiendo del tipo de dato y si el campo es requerido o no, creamos el esquema de validación Yup correspondiente.
      if (dato.type === 'string' && dato.required) {
        validationSchema[dato.name] = Yup.string().required('Requerido');
      } else if (dato.type === 'number' && dato.required) {
        validationSchema[dato.name] = Yup.number().typeError('Debe ser un número').required('Requerido');
      } else if (dato.type === 'email' && dato.required) {
        validationSchema[dato.name] = Yup.string().email('Debe ser un correo electrónico válido').required('Requerido');
      } else if (dato.type === 'array' && dato.required) {
        validationSchema[dato.name] = Yup.array().min(1).required('Es requerido');
      } else if (dato.type === 'string' && !dato.required) {
        validationSchema[dato.name] = Yup.string();
      } else if (dato.type === 'number' && !dato.required) {
        validationSchema[dato.name] = Yup.number().integer('Debe ser un número entero');
      } else if (dato.type === 'email' && !dato.required) {
        validationSchema[dato.name] = Yup.string().email('Debe ser un correo electrónico válido');
      } else if (dato.type === 'array' && !dato.required) {
        validationSchema[dato.name] = Yup.array();
      }
    });
  
    return Yup.object().shape(validationSchema);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={generarValidationSchema(validation)}
    >
      {form}
    </Formik>
  );
};

// Exportamos el componente MyFormik para que pueda ser utilizado en otros archivos.
export default MyFormik;

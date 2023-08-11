// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import { CheckBox } from "@/ui/components";

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
  [x: string]: any;
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function NonEssentialForm({ dataForm, onClickChk }: Props) {
  // Definimos reglas de validación para el formulario.
  return (
    <div>
      <div className="relative py-2 space-y-2">
        <hr className="border-t border-gray-400"></hr>
        <p className="font-bold">Configuración Uso de Datos NO esenciales</p>
        <p>
          A continuación ingresa el texto de la politica de uso de datos que
          deseas asociar:
        </p>
      </div>
      <div>
        {dataForm?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex my-8 text-sm"
          >
            <div className="flex items-center">
              <CheckBox
                label=""
                name="visible"
                value="required"
                checked={item.disabled}
                onClick={() => {
                  onClickChk(item.name);
                }}
              />
            </div>
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonEssentialForm;

import serviceModelType from './serviceModelType'

function modelServicio(servicio) {
  this.id = servicio?.id
  this.titulo = servicio?.titulo;
  this.descripcion = servicio?.descripcion;
  this.categoria =  servicio?.categoria;
  this.portada = servicio?.portada?.url;
  this.unidad = servicio?.unidad?.titulo;
  this.moneda = servicio?.moneda?.titulo;
  this.url = servicio?.url
  this.politicas = servicio?.politicas
  this.type = new serviceModelType(servicio?.Tipo_Servicio)
  this.locacion = servicio?.locacion ? JSON.parse(servicio.locacion) : null
  this.incluido = servicio?.incluido?.map(item => {return({titulo:item?.titulo, descripcion:item?.descripcion})})
  this.minimo_apartado = servicio?.minimo_apartado;
  this.duracion = {
    cantidad: servicio?.Tipo_Servicio[0]?.duracion,
    unidad: servicio?.Tipo_Servicio[0]?.unidad_duracion
  }
  this.tarifas = servicio?.Tipo_Servicio[0]?.Tarifas?.map(tarifa => {
    return(
      {
        id: tarifa?.id,
        titulo:tarifa?.titulo,
        precio:tarifa?.precio,
        descripcion:tarifa?.descripcion,
        imagen: tarifa?.imagen,
        fechas: tarifa?.Fechas ? tarifa?.Fechas : undefined
      }
    );
  })
  this.tarifaBaja = servicio?.Tipo_Servicio[0]?.Tarifas?.reduce((previous, current) => {
    return current.precio < previous.precio ? current : previous;
  })
}
    
export default modelServicio;
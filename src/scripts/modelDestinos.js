function modelDestino(data) {
  const locality = data?.data?.map(item => {
    const itemJson = JSON.parse(item?.attributes?.locacion);
    if (item?.attributes?.locacion !== null) {
      return [itemJson?.locality,{...itemJson, portada: item?.attributes?.portada?.data?.attributes?.url}]
    }
  })
  const localityFilter = locality.filter(item => item !== undefined)
  const localityMap = new Map(localityFilter);
  const filterLocality = [...localityMap.values()]
  return filterLocality;
}

export default modelDestino;
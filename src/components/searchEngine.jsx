import React,{useState} from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useNavigate  } from "react-router-dom";
import Moment from 'moment'
import plurales from 'plurales';

function SearchEngine({ tiposServicios }) {
    const [address, setAddress] = useState("");
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();
    const [pais, setPais] = useState('')
    const [typeSelect, setTypeSelect] = useState('atraccion')

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        const tipos = [typeSelect]
        let url = new URL(window.location)
        url.searchParams.set('ciudad',ciudad)
        url.searchParams.set('pais',pais)
        url.searchParams.set('tipo',JSON.stringify(tipos))
        navigate(`/destino${url.search}`)
      }

      const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);
        setAddress(value);
        result[0]?.address_components.map(address => {
          const types = address.types;
          if (types.find(type => type === 'locality')) {
            let locality = types.find(type => type === 'locality') ? address.long_name : '';
            setCiudad(locality)
          } else if (types.find(type => type === 'country')) {
            let country = types.find(type => type === 'country') ? address.long_name : '';
            setPais(country)
          }
        })
      }

      const handleSelectMenu = ( margin, selectItem ) => {
        const component = document.getElementById('selectMenu')
        setTypeSelect(selectItem)
    
        component.style.left = margin
      }

  return (
    <div className="Home-containerSearch">
            <div className="Home-SearchWrapper">
              <div className="Home-SearchHeader">
                {(tiposServicios && tiposServicios.length > 0) && tiposServicios.map((servicio,index)=> {
                  const margin = (100 / tiposServicios.length) * index
                  console.log(servicio?.attributes?.titulo)
                  return (
                    <div onClick={() => handleSelectMenu(`${margin}%`, servicio?.attributes?.titulo)}>{servicio?.attributes?.titulo === 'Tour' ? 'tours' : plurales(servicio?.attributes?.titulo)}</div>
                  )
                })}
                <div className='Home-SearchHeaderSelect' style={{width:`${100/tiposServicios.length}%`}} id='selectMenu'></div>
              </div>
              <form className="Home-SearchBody" onSubmit={(e) => handleSubmitSearch(e)}>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-location-dot"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Locación</label>
                    <PlacesAutocomplete value={ address } onChange={setAddress} onSelect={handleSelect}>
                      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                      <div>
                        <input {...getInputProps({placeholder:'¿A dónde vas?'})} required={true}/>

                        {(suggestions && suggestions.length > 0) && <div className='suggestionsContainer'>
                          {loading ? <div>...cargando</div> : null }
                          {suggestions.map(suggestion => {
                            const style = {
                              backgroundColor: suggestion.active ? '#e3e3e6' : "#fff"
                            }

                            return (
                              <div {...getSuggestionItemProps(suggestion, { style })}>
                                {suggestion?.description}
                              </div>
                            )
                          })}
                        </div>}
                      </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-calendar"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">¿Cuando?</label>
                    <input type="date" min={Moment().format('YYYY-MM-DD')} required={true}/>
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-user-vneck"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Personas</label>
                    <input type="number" placeholder='¿Cuantos van?' required={true} />
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <button>
                      <span>Buscar</span>
                     <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default SearchEngine
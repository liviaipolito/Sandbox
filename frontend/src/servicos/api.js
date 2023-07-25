
// import Cadastro from '../../componentes/Cadastro/Cadastro';
const baseUrl = 'http://localhost:8080'


// let corpo = JSON.stringify({
//   documento: documento,
//   nome: nome
// })

const api = {
    getToken: () => {
        const requisicao = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
      
        return fetch(baseUrl + '/oauth2/token', requisicao)
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json()
                }
            })
            .catch(erro => {
                console.error(erro)
                throw erro
            })
    },
    getRegdocs: (token) => {
        const requisicao = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': (token)
            }
        }
      
        return fetch(baseUrl + '/v1/registration', requisicao)
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json()
                }
            })
            .catch(erro => {
                console.error(erro)
                throw erro
            })
    },
    postRegdocs: (token) => {

        const requisicao = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept' : 'application/json',
              'Authorization': (token)
            },
        }
      
        return fetch(baseUrl + '/v1/agreement', requisicao)
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json()
                }
            })
            .catch(erro => {
                console.error(erro)
                throw erro
            })
    },

    createIndividuals : (token) => {

      // let corpo = JSON.stringify({
      //   documento: documento,
      //   nome: nome
      // })

      const requisicao = {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': (token)
        },
        // body: corpo
      }
      fetch(baseUrl + '/v2/individuals', requisicao)
        .then((resposta) => {
          if (resposta.ok) {
            return resposta.json;
          }
        })
        .catch((erro) => {
          console.error(erro);
          alert(erro)
        })
    }
}

export default api
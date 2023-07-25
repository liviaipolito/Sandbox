package createindividuals

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/dockapis/go-react-app/apis/authorization"
)

var (
	username    = "36n49ctdvg838ppq4qu1nu6u3l"
	password    = "rc3b0b9kmic3ehagg8gm0j6a632f1cquf3a0a28oqqf0bv2npj7"
	environment = authorization.Homologation
)

func CreateIndividuals() (*string, error) {

	url := "https://api.hml.caradhras.io/v2/individuals"
	method := "POST"

	client := &http.Client{}

	// var indiv dadosIndividuals

	// payload := strings.NewReader(fmt.Sprintf(`{+
	// 		"%s","+"
	// 		"%s",
	// 	"fingerprint": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36#192.168.1.2"
	// }`, indiv.Nome, indiv.Documento))

	// payload := strings.NewReader(fmt.Sprintf(`{
	//   "name": "%s",
	//   "document": "%s"
	// }`, dadosIndividuals.Nome, dadosIndividuals.Documento))

	api_resultados := dadosIndividuals{}

	nome := api_resultados.Nome
	documento := api_resultados.Documento

	// return &nome, &documento, nil

	payload := strings.NewReader(fmt.Sprintf(`{+
		"name":
			"%s","+"
		"document":
			"%s","+"
		"fingerprint": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36#192.168.1.2"
	}`, nome, documento))

	// payload := strings.NewReader(`{"+"
	// "+"
	//   "documento": ou" ","+"
	// "+"
	//   "nome": " "+"
	// "+"
	// }`)

	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		return nil, err
	}

	caradhras := authorization.New(username, password, environment)
	token, err := caradhras.GetAccessToken()
	if err != nil {
		panic(err)
	}

	req.Header.Add("Authorization", token)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	bodyString := string(body)
	return &bodyString, nil

	// res, err := client.Do(req)
	// if err != nil {
	// 	return nil, err
	// }
	// defer res.Body.Close()

	// body, err := ioutil.ReadAll(res.Body)
	// if err != nil {
	// 	return nil, err
	// }

	// err = json.Unmarshal(body)
	// if err != nil {
	// 	return nil, err
	// }

	// return nil, err

	// api_resultados := dadosIndividuals{}

	// jsonErr := json.Unmarshal(body, &api_resultados)

	// if jsonErr != nil {
	// 	log.Fatal(jsonErr)
	// }

	// body, err := ioutil.ReadAll(res.Body)
	// if err != nil {
	// 	return nil, err
	// }

	// bodyString := string(body)
	// return &bodyString, nil

	// nome := api_resultados.Nome
	// documento := api_resultados.Documento

	// return &nome, &documento,

}

type dadosIndividuals struct {
	Nome      string `json:"name"`
	Documento string `json:"document"`
	Message   string `json:"message"`
}

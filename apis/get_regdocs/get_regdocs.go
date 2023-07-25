package getregdocs

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/dockapis/go-react-app/apis/authorization"
)

var (
	username    = "36n49ctdvg838ppq4qu1nu6u3l"
	password    = "rc3b0b9kmic3ehagg8gm0j6a632f1cquf3a0a28oqqf0bv2npj7"
	environment = authorization.Homologation
)

func GetRegdocs() (*string, *string, error) {
	url := "https://regdocs.hml.caradhras.io/v1/registration?types=PRIVACY_POLICY&types=TERMS_OF_USE"
	method := "GET"

	client := &http.Client{}

	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		return nil, nil, err
	}
	caradhras := authorization.New(username, password, environment)
	token, err := caradhras.GetAccessToken()
	if err != nil {
		panic(err)
	}

	req.Header.Add("Accept", "application/json")
	req.Header.Add("Authorization", token)
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	res, err := client.Do(req)
	if err != nil {
		return nil, nil, err
	}

	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	api_resultados := apiResult{}

	jsonErr := json.Unmarshal(body, &api_resultados)

	if jsonErr != nil {
		log.Fatal(jsonErr)
	}

	// fmt.Println(api_resultados.RegulatoryDocuments[0].Tokens)
	// fmt.Println(api_resultados.RegulatoryDocuments[1].Tokens)

	regDocsToken1 := api_resultados.Result["regulatoryDocuments"][0].Token
	regDocsToken2 := api_resultados.Result["regulatoryDocuments"][1].Token

	return &regDocsToken1, &regDocsToken2, nil

}

// type apiResponse struct {
// 	RegDocObj string `json:"regDocObj"`
// 	Type      string `json:"type"`
// 	Tokens    string `json:"token"`
// }

type apiResult struct {
	Message string                          `json:"message"`
	Result  map[string][]regulatoryDocument `json:"result"`
}

type regulatoryDocument struct {
	RegDocObj string `json:"regDocObj"`
	Type      string `json:"type"`
	Token     string `json:"token"`
}

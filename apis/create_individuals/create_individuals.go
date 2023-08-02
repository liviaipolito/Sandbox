package createindividuals

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/dockapis/go-react-app/apis/authorization"
)

var (
	username    = "36n49ctdvg838ppq4qu1nu6u3l"
	password    = "rc3b0b9kmic3ehagg8gm0j6a632f1cquf3a0a28oqqf0bv2npj7"
	environment = authorization.Homologation
)

func CreateIndividuals(req *http.Request) (*string, error) {

	api_resultados := dadosIndividuals{}

	url := "https://api.hml.caradhras.io/v2/individuals"
	method := "POST"
	token := req.Header.Get("Authorization")

	client := &http.Client{}

	// payload := api_resultados
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		return nil, err
		// log.Fatal(err)
	}

	jsonErr := json.Unmarshal(body, &api_resultados)

	if jsonErr != nil {
		log.Fatal(jsonErr)
	}

	nome := api_resultados.Nome
	documento := api_resultados.Documento

	// payload := strings.NewReader(fmt.Sprintf(`{+
	// 	"name":
	// 		"%s",
	// 	"document":
	// 		"%s"
	// }`, nome, documento))

	payload := strings.NewReader(fmt.Sprintf("{\n  \"name\": \"%s\",\n  \"preferredName\": \"Seiya\",\n  \"motherName\": \"Saori Kido\",\n  \"birthDate\": \"1985-12-09\",\n  \"gender\": \"M\",\n  \"document\": \"%s\",\n  \"emancipatedMinor\": false,\n  \"idNumber\": \"6537265\",\n  \"identityIssuingEntity\": \"SSP\",\n  \"federativeUnit\": \"SP\",\n  \"issuingDateIdentity\": \"2000-02-01\",\n  \"idMaritalStatus\": 1,\n  \"idProfession\": \"1\",\n  \"idOccupationType\": 1,\n  \"idNationality\": 1,\n  \"fatherName\": \"Matsumada Kido\",\n  \"email\": \"teste@teste.com\",\n  \"companyName\": \"teste\",\n  \"incomeValue\": 999,\n  \"isPep\": true,\n  \"isPepSince\": \"2019-01-01\",\n  \"address\": {\n    \"idAddressType\": 1,\n    \"zipCode\": \"04472200\",\n    \"street\": \"Travessa Oceano\",\n    \"number\": 777,\n    \"complement\": \"Complemento 120\",\n    \"referencePoint\": \"Em frente à Drogasil\",\n    \"neighborhood\": \"Pinheiros\",\n    \"city\": \"São Paulo\",\n    \"federativeUnit\": \"SP\",\n    \"country\": \"Brasil\"\n  },\n  \"phone\": {\n    \"idPhoneType\": 1,\n    \"areaCode\": \"011\",\n    \"number\": \"978789564\"\n  },\n  \"termsAndConditionsTokens\": [\n    \"e8b90f67-09a8-428e-bab5-d6f271128b5b\",\n    \"0229ad42-2fef-41eb-ba10-d7ebca5f70c0\"\n  ],\n  \"deviceIdentification\": {\n    \"fingerprint\": \"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0#1.160.10.240\"\n  }\n}", nome, documento))

	req, err = http.NewRequest(method, url, payload)

	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", token)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	body, err = ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	bodyString := string(body)
	fmt.Println(bodyString)

	defer res.Body.Close()
	return &bodyString, nil

}

type dadosIndividuals struct {
	Nome      string `json:"name"`
	Documento string `json:"document"`
}

type individualsResponse struct {
	Mensagem string `json:"message"`
}

// 	Name string `json:"name"`
// 	PreferredName string `json:"preferredName"`
// 	MotherName string `json:"motherName"`
// 	BirthDate string `json:"birthDate"`
// 	Gender string `json:"gender"`
// 	Document string `json:"document"`
// 	EmancipatedMinor bool `json:"emancipatedMinor"`
// 	IdNumber string `json:"idNumber"`
// 	IdentityIssuingEntity `json:"identityIssuingEntity"`
// 	FederativeUnit `json:"federativeUnit"`
// 	IssuingDateIdentity `json:"issuingDateIdentity"`
// 	IdMaritalStatus `json:"idMaritalStatus"`
// 	IdProfession `json:"idProfession"`
// 	IdOccupationType `json:"idOccupationType"`
// 	IdNationality `json:"idNationality"`
// 	FatherName `json:"fatherName"`
// 	Email `json:"email"`
// 	CompanyName `json:"companyName"`
// 	IncomeValue `json:"incomeValue"`
// 	IsPep `json:"isPep"`
// 	isPepSince `json:"isPepSince"`
// 	address: {
// 	  IdAddressType `json:"idAddressType"`
// 	  ZipCode `json:"zipCode"`
// 	  Street `json:"street"`
// 	  Number `json:"number"`
// 	  Complement `json:"complement"`
// 	  ReferencePoint `json:"referencePoint"`
// 	  Neighborhood `json:"neighborhood"`
// 	  City `json:"city"`
// 	  FederativeUnit `json:"federativeUnit"`
// 	  Country `json:"country"`
// 	},

// var dadosIndividuals
// json.NewDecoder(r.Body).Decode(&dadosIndividuals)

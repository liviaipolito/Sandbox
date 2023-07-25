package postregdocs

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/dockapis/go-react-app/apis/authorization"
	getregdocs "github.com/dockapis/go-react-app/apis/get_regdocs"
)

var (
	username    = "36n49ctdvg838ppq4qu1nu6u3l"
	password    = "rc3b0b9kmic3ehagg8gm0j6a632f1cquf3a0a28oqqf0bv2npj7"
	environment = authorization.Homologation
)

func PostRegdocs() (*string, error) {
	url := "https://regdocs.hml.caradhras.io/v1/agreement"
	method := "POST"

	client := &http.Client{}

	regDocsToken1, regDocsToken2, err := getregdocs.GetRegdocs()
	if err != nil {
		return nil, err
	}
	// println(*regDocsToken1)
	// println(*regDocsToken2)

	payload := strings.NewReader(fmt.Sprintf(`{
		"tokens": [
			"%s",
			"%s"
		],
		"fingerprint": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36#192.168.1.2"
	}`, *regDocsToken1, *regDocsToken2))

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

}

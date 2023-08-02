package main

import (
	"encoding/json"
	"net/http"

	"github.com/dockapis/go-react-app/apis/authorization"
	createindividuals "github.com/dockapis/go-react-app/apis/create_individuals"
	getregdocs "github.com/dockapis/go-react-app/apis/get_regdocs"
	postregdocs "github.com/dockapis/go-react-app/apis/post_regdocs"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var (
	username    = "36n49ctdvg838ppq4qu1nu6u3l"
	password    = "rc3b0b9kmic3ehagg8gm0j6a632f1cquf3a0a28oqqf0bv2npj7"
	environment = authorization.Homologation
)

// func handler(w http.ResponseWriter, r *http.Request) {
// http.ServeFile(w, r, "./frontend/src/componentes/OnboardingPF/OnboardingPF.js")
// }
func getTokenHandler(w http.ResponseWriter, req *http.Request) {

	caradhras := authorization.New(username, password, environment)
	token, err := caradhras.GetAccessToken()
	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(token)
	if err != nil {
		panic(err)
	}
	w.Write(response)

	w.WriteHeader(http.StatusOK)
}

func getRegdocsHandler(w http.ResponseWriter, req *http.Request) {

	regDocsToken1, regDocsToken2, err := getregdocs.GetRegdocs()
	if err != nil {
		panic(err)
	}
	regdocs := []string{
		*regDocsToken1, *regDocsToken2,
	}
	response, err := json.Marshal(regdocs)
	if err != nil {
		panic(err)
	}
	w.Write(response)

	w.WriteHeader(http.StatusOK)
}

func postRegdocsHandler(w http.ResponseWriter, req *http.Request) {

	regdocs, err := postregdocs.PostRegdocs()
	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(regdocs)
	if err != nil {
		panic(err)
	}
	w.Write(response)

	w.WriteHeader(http.StatusOK)
}

func postCreateIndividualsHandler(w http.ResponseWriter, req *http.Request) {

	dadosIndividuals, err := createindividuals.CreateIndividuals(req)

	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(dadosIndividuals)
	if err != nil {
		panic(err)
	}
	w.Write(response)

	w.WriteHeader(http.StatusOK)
}

func main() {

	router := mux.NewRouter()

	allowedHeaders := handlers.AllowedHeaders([]string{"Content-Type", "Authorization"})
	allowedOrigins := handlers.AllowedOrigins([]string{"*"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "HEAD", "POST"})

	router.HandleFunc("/oauth2/token", getTokenHandler).Methods("GET")
	router.HandleFunc("/v1/registration", getRegdocsHandler).Methods("GET")
	router.HandleFunc("/v1/agreement", postRegdocsHandler).Methods("GET", "HEAD", "POST")
	
	router.HandleFunc("/v2/individuals", postCreateIndividualsHandler).Methods("POST")

	err := http.ListenAndServe(":8080", handlers.CORS(allowedOrigins, allowedHeaders, allowedMethods)(router))
	if err != nil {
		panic(err)
	}
}

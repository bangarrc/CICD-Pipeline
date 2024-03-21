package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/api/bookings", handleBookings)
    fmt.Println("Server is running on port 8080")
    http.ListenAndServe(":8080", nil)
}

func handleBookings(w http.ResponseWriter, r *http.Request)
    fmt.Fprintf(w, "Booking API Endpoint")
}

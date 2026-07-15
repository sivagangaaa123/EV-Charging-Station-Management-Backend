const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sivaganga:22youmewe22@cluster0.v60twit.mongodb.net/coursedb").then(
    () =>{
        console.log("mongodb connected")
    }
).catch(
    (error) =>{
        console.log(error)
    }
)
const EVCharging=mongoose.model("EVCharging",new mongoose.Schema(
    {

        BookingID: String,
        OwnerName: String,
        Email: String,
        Phone: String,
        VehicleRegistrationNumber: String,
        VehicleBrand: String,
        VehicleModel: String,
        BatteryCapacity : String,
        ConnectorType: String,
        ChargingDate: String,
        TimeSlot: String,
        EstimatedUnits: String,
        ChargingBayNumber: String

    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/view-all-bookings", async(req, res) => {
    const vehicles=await EVCharging.find()
    res.json(vehicles)
})
app.post("/add-booking", async (req, res) => {
   await EVCharging.create(req.body)
    res.json({"status": "success"})
})
app.listen(2000, () => {
    console.log("server started")
})

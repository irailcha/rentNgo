const advertsData = [
    {
        "id": 9582,
        "year": 2008,
        "make": "Buick",
        "model": "Enclave",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724154916/Buick_Enclave_cxbwy2.jpg",
        "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
        "fuelConsumption": "10.5",
        "engineSize": "3.6L V6",
        "accessories": [
            "Leather seats",
            "Panoramic sunroof",
            "Premium audio system"
        ],
        "functionalities": [
            "Power liftgate",
            "Remote start",
            "Blind-spot monitoring"
        ],
        "rentalPrice": "$40",
        "rentalCompany": "Luxury Car Rentals",
        "address": "123 Example Street, Kiev, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 5858
    },
    {
        "id": 9584,
        "year": 2019,
        "make": "Volvo",
        "model": "XC90",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724154917/Volvo_CX90_jbhsis.jpg",
        "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
        "fuelConsumption": "8.3",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Nappa leather seats",
            "Bowers & Wilkins premium sound system",
            "Head-up display"
        ],
        "functionalities": [
            "IntelliSafe advanced safety features",
            "Pilot Assist semi-autonomous driving",
            "Four-zone automatic climate control"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Premium Auto Rentals",
        "address": "456 Example Avenue, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 5352
    },
    {
        "id": 9586,
        "year": 2020,
        "make": "Volvo",
        "model": "XC60",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724156080/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_2Fpublic_2Fimages_2F31f47596-521e-4070-94e7-58c9f4f23f62_4074x2593_ecjswk.jpg",
        "description": "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
        "fuelConsumption": "7.9",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Premium leather seats",
            "Harman Kardon audio system",
            "Hands-free power tailgate"
        ],
        "functionalities": [
            "City Safety collision avoidance technology",
            "Pilot Assist with adaptive cruise control",
            "9-inch Sensus touchscreen infotainment system"
        ],
        "rentalPrice": "$45",
        "rentalCompany": "Luxury Car Rentals",
        "address": "789 Example Boulevard, Odessa, Ukraine",
        "rentalConditions": "Minimum age: 23\nValid driver's license\nCredit card required",
        "mileage": 5966
    },
    {
        "id": 9587,
        "year": 2006,
        "make": "HUMMER",
        "model": "H2",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155080/2006-HUMMER-H2-FrontSide_HUHM2SUT061_505x375_rodplt.jpg",
        "description": "The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
        "fuelConsumption": "19.8",
        "engineSize": "6.0L V8",
        "accessories": [
            "Heated leather seats",
            "Bose premium sound system",
            "Off-road package"
        ],
        "functionalities": [
            "Electronic locking front and rear differentials",
            "Stabilitrak stability control",
            "Tire pressure monitoring system"
        ],
        "rentalPrice": "$55",
        "rentalCompany": "Adventure Car Rentals",
        "address": "321 Example Road, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 4771
    },
    {
        "id": 9590,
        "year": 2016,
        "make": "Subaru",
        "model": "Outback",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155111/13512088_10153623626656570_4590229344122649690_n_1200x1200_kecipw.jpg",
        "description": "The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.",
        "fuelConsumption": "8.7",
        "engineSize": "2.5L 4-cylinder",
        "accessories": [
            "Leather upholstery",
            "Power moonroof",
            "Harman Kardon premium audio system"
        ],
        "functionalities": [
            "Symmetrical All-Wheel Drive",
            "X-Mode off-road assist",
            "Subaru EyeSight driver-assist system"
        ],
        "rentalPrice": "$35",
        "rentalCompany": "Adventure Car Rentals",
        "address": "987 Example Street, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nCredit card required",
        "mileage": 4061
    },
    {
        "id": 9591,
        "year": 2010,
        "make": "Mitsubishi",
        "model": "Outlander",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155363/34145279_OVR_1_1333x1000_rdvjdk.jpg",
        "description": "The Mitsubishi Outlander is a practical and fuel-efficient SUV with a stylish design and a range of modern features.",
        "fuelConsumption": "7.9",
        "engineSize": "2.4L 4-cylinder",
        "accessories": [
            "Heated front seats",
            "Rockford Fosgate premium audio system",
            "Power liftgate"
        ],
        "functionalities": [
            "Super All-Wheel Control",
            "Multi-View camera system",
            "Bluetooth hands-free system"
        ],
        "rentalPrice": "$30",
        "rentalCompany": "City Car Rentals",
        "address": "654 Example Avenue, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 5374
    },
    {
        "id": 9593,
        "year": 2014,
        "make": "Nissan",
        "model": "Pathfinder",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155166/2014-nissan-pathfinder-hybrid-awd-test-review-car-and-driver-photo-558327-s-original_qvdqk7.jpg",
        "description": "The Nissan Pathfinder is a versatile and family-friendly SUV that offers a comfortable ride and generous cargo space.",
        "fuelConsumption": "9.5",
        "engineSize": "3.5L V6",
        "accessories": [
            "Tri-Zone Automatic Climate Control",
            "Bose premium sound system",
            "Rear-seat entertainment system"
        ],
        "functionalities": [
            "Intelligent 4x4 system",
            "Advanced Drive-Assist Display",
            "Nissan Intelligent Key with push-button ignition"
        ],
        "rentalPrice": "$40",
        "rentalCompany": "Luxury Car Rentals",
        "address": "321 Example Road, Odessa, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 6282
    },
    {
        "id": 9596,
        "year": 2009,
        "make": "Lincoln",
        "model": "Navigator L",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724156172/14018105381691639020_large_lr0vcd.jpg",
        "description": "The Lincoln Navigator L is a luxurious and spacious SUV with a refined interior and advanced technology features.",
        "fuelConsumption": "18.2",
        "engineSize": "5.4L V8",
        "accessories": [
            "Premium leather seats",
            "THX II Certified audio system",
            "Power-deployable running boards"
        ],
        "functionalities": [
            "AdvanceTrac with Roll Stability Control",
            "Voice-Activated Navigation System",
            "Power liftgate"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Elite Car Rentals",
        "address": "123 Example Boulevard, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nInsurance coverage required",
        "mileage": 6173
    },
    {
        "id": 9597,
        "year": 2000,
        "make": "GMC",
        "model": "Yukon Denali",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155485/0911-12-z-2009-gMC-yukon-denali-hybrid-front-three-quarter-view_kqfhqx.jpg",
        "description": "The GMC Yukon Denali is a full-size luxury SUV that offers a powerful engine, a comfortable and spacious interior, and a host of advanced features.",
        "fuelConsumption": "14.5",
        "engineSize": "6.0L V8",
        "accessories": [
            "Heated and ventilated front seats",
            "BOSE premium sound system",
            "Power-folding third-row seats"
        ],
        "functionalities": [
            "All-Wheel Drive",
            "Adaptive suspension",
            "Advanced safety features"
        ],
        "rentalPrice": "$45",
        "rentalCompany": "Premium Car Rentals",
        "address": "789 Example Square, Dnipro, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 4989
    },
    {
        "id": 9598,
        "year": 2007,
        "make": "Hyundai",
        "model": "Tucson",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155486/24981825410_353f769af2_b_i38kun.jpg",
        "description": "The Hyundai Tucson is a reliable and fuel-efficient SUV that combines practicality with a stylish design and a comfortable ride.",
        "fuelConsumption": "8.2",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Apple CarPlay and Android Auto integration",
            "Blind Spot Detection",
            "Hands-free smart liftgate"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Hillstart Assist Control",
            "LED headlights"
        ],
        "rentalPrice": "$25",
        "rentalCompany": "Economy Car Rentals",
        "address": "456 Example Lane, Zaporizhzhia, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nCredit card required",
        "mileage": 4591
    },
    {
        "id": 9583,
        "year": 2006,
        "make": "MINI",
        "model": "Convertible",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155554/rElwMZB7-X5f-V_jlBz.TE51zSKnq_ra3zgw.jpg",
        "description": "The MINI Convertible is a compact and fun-to-drive convertible that offers a unique and iconic design, agile handling, and an open-air driving experience.",
        "fuelConsumption": "6.9",
        "engineSize": "1.6L 4-cylinder",
        "accessories": [
            "Convertible soft top",
            "Sport seats",
            "MINI Connected infotainment system"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Dynamic Stability Control",
            "Rain-sensing wipers"
        ],
        "rentalPrice": "$30",
        "rentalCompany": "Fun Car Rentals",
        "address": "234 Example Place, Vinnytsia, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 6275
    },
    {
        "id": 9606,
        "year": 2007,
        "make": "Bentley",
        "model": "Azure",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155572/rNaN0RdP-vK81TEbrwq-_edit_yvm6l6.jpg",
        "description": "The Bentley Azure is a luxurious and prestigious convertible that combines exceptional craftsmanship, powerful performance, and sophisticated elegance.",
        "fuelConsumption": "22.5",
        "engineSize": "6.8L V8",
        "accessories": [
            "Mulliner Driving Specification",
            "Naim for Bentley premium audio system",
            "Heated steering wheel"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Air suspension",
            "Automatic convertible roof"
        ],
        "rentalPrice": "$150",
        "rentalCompany": "Luxury Car Rentals",
        "address": "567 Example Street, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 4317
    },
    {
        "id": 9612,
        "year": 2004,
        "make": "Mercedes-Benz",
        "model": "SL-Class",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155592/2004-mercedes-benz-sl-class-2dr-roadster-5-0l-amg-sport_vmbdty.jpg",
        "description": "The Mercedes-Benz SL-Class is a legendary luxury convertible that offers a perfect blend of thrilling performance, advanced technology, and opulent comfort.",
        "fuelConsumption": "11.8",
        "engineSize": "5.0L V8",
        "accessories": [
            "Airscarf neck-level heating",
            "Harman Kardon premium audio system",
            "Active Body Control suspension"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Retractable hardtop roof",
            "Multi-contour seats"
        ],
        "rentalPrice": "$75",
        "rentalCompany": "Exquisite Car Rentals",
        "address": "789 Example Boulevard, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and proof of insurance required",
        "mileage": 5722
    },
    {
        "id": 9616,
        "year": 2010,
        "make": "Aston Martin",
        "model": "DBS",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155629/2010-aston-martin-dbs-volante-1_kzlmir.jpg",
        "description": "The Aston Martin DBS is a stunning and high-performance convertible that exemplifies British luxury and delivers exhilarating driving dynamics.",
        "fuelConsumption": "16.5",
        "engineSize": "6.0L V12",
        "accessories": [
            "Carbon Ceramic brakes",
            "Bang & Olufsen BeoSound audio system",
            "Bridge of Weir leather upholstery"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Carbon-fiber body panels",
            "Adaptive Damping System"
        ],
        "rentalPrice": "$200",
        "rentalCompany": "Supreme Car Rentals",
        "address": "123 Example Avenue, Odessa, Ukraine",
        "rentalConditions": "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 6464
    },
    {
        "id": 9619,
        "year": 1996,
        "make": "Pontiac",
        "model": "Firebird",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155650/1996_pontiac_firebird-trans-am-coupe_1996_pontiac_firebird-trans-am-coupe_a39cf457-53f1-4cbf-958e-541f8592891b-QNt8nj-14642-14643-scaled_qe0j7v.jpg",
        "description": "The Pontiac Firebird is a classic American muscle car with bold styling, powerful engines, and an iconic presence that captures the essence of the golden era of performance.",
        "fuelConsumption": "15.2",
        "engineSize": "5.7L V8",
        "accessories": [
            "T-Top roof",
            "Delco premium audio system",
            "Sport suspension"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Limited-slip differential",
            "High-performance exhaust"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Classic Car Rentals",
        "address": "456 Example Street, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
        "mileage": 5091
    },
    {
        "id": 9629,
        "year": 2009,
        "make": "Lamborghini",
        "model": "Murcielago",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155677/bu48my09tgm61_urttre.jpg",
        "description": "The Lamborghini Murcielago is an exotic and high-performance convertible that represents the epitome of Italian automotive engineering, combining breathtaking design, blistering speed, and a spine-tingling exhaust note.",
        "fuelConsumption": "25.0",
        "engineSize": "6.5L V12",
        "accessories": [
            "Carbon-fiber body panels",
            "Alcantara upholstery",
            "Lamborghini Infotainment System"
        ],
        "functionalities": [
            "All-Wheel Drive",
            "Electronic Stability Control",
            "Retractable soft-top roof"
        ],
        "rentalPrice": "$500",
        "rentalCompany": "Supercar Rentals",
        "address": "321 Example Road, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 5832
    },
    {
        "id": 9631,
        "year": 2011,
        "make": "Audi",
        "model": "A5",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155695/2011-audi-a5-2-0-TFSI-quattro-coupe-front-left-view1_laomin.jpg",
        "description": "The Audi A5 is a stylish and refined convertible that offers a perfect blend of elegance, cutting-edge technology, and exhilarating driving dynamics.",
        "fuelConsumption": "8.5",
        "engineSize": "2.0L Inline-4",
        "accessories": [
            "Bang & Olufsen 3D sound system",
            "Audi Virtual Cockpit",
            "Audi Drive Select"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Quattro all-wheel drive available",
            "Power-folding acoustic soft-top"
        ],
        "rentalPrice": "$150",
        "rentalCompany": "Luxury Car Rentals",
        "address": "987 Example Lane, Dnipro, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 4635
    },
    {
        "id": 9634,
        "year": 2001,
        "make": "BMW",
        "model": "Z8",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155716/9AlRQe0e-HwhXlKjqLG-_edit_s16uih.jpg",
        "description": "The BMW Z8 is a classic and timeless convertible that combines iconic retro-inspired design, outstanding performance, and luxurious comfort.",
        "fuelConsumption": "14.2",
        "engineSize": "4.9L V8",
        "accessories": [
            "Aluminum space frame",
            "Nappa leather upholstery",
            "Harman Kardon audio system"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Dynamic Stability Control",
            "Power-operated soft-top roof"
        ],
        "rentalPrice": "$300",
        "rentalCompany": "Classic Car Rentals",
        "address": "654 Example Circle, Zaporizhzhia, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and proof of insurance required",
        "mileage": 5990
    },
    {
        "id": 9655,
        "year": 1998,
        "make": "Chevrolet",
        "model": "Camaro",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155731/1998-camaro-crop-bis.5n5RUwmqM_ybnwo2.jpg",
        "description": "The Chevrolet Camaro is an American muscle car legend with a rich heritage, boasting aggressive styling, powerful engines, and exhilarating performance.",
        "fuelConsumption": "13.5",
        "engineSize": "5.7L V8",
        "accessories": [
            "Leather upholstery",
            "Bose premium sound system",
            "Performance suspension"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Limited-slip differential",
            "Power-operated convertible top"
        ],
        "rentalPrice": "$200",
        "rentalCompany": "Muscle Car Rentals",
        "address": "123 Example Street, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 6330
    },
    {
        "id": 9685,
        "year": 2006,
        "make": "Mercedes-Benz",
        "model": "SLK-Class",
        "type": "Convertible",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155757/mercedes-slk-class-2006-mercedes-benz-slk-class-slk-55-amg-roadster-2d_9010043433_phinnz.jpg",
        "description": "The Mercedes-Benz SLK-Class is a luxurious and sporty convertible that offers a perfect balance of style, performance, and refinement, delivering an enjoyable open-top driving experience.",
        "fuelConsumption": "9.8",
        "engineSize": "3.5L V6",
        "accessories": [
            "Airscarf neck-level heating",
            "Harman Kardon surround sound system",
            "Magic Sky Control panoramic roof"
        ],
        "functionalities": [
            "Rear-Wheel Drive",
            "Dynamic Stability Control",
            "Retractable hardtop roof"
        ],
        "rentalPrice": "$250",
        "rentalCompany": "Luxury Car Rentals",
        "address": "456 Example Avenue, Kyiv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 6280
    },
    {
        "id": 9660,
        "year": 2020,
        "make": "Chrysler",
        "model": "Voyager",
        "type": "Van/Minivan",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724156476/HCJ-Chrysler-Voyager_gwnouw.jpg",
        "description": "The Chrysler Voyager is a practical and versatile van/minivan that provides comfortable seating, ample cargo space, and a range of convenient features for family-oriented transportation.",
        "fuelConsumption": "8.2",
        "engineSize": "3.6L V6",
        "accessories": [
            "Stow 'n Go seating",
            "Uconnect infotainment system",
            "Blind Spot Monitoring"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Electronic Stability Control",
            "Power sliding side doors"
        ],
        "rentalPrice": "$100",
        "rentalCompany": "Family Car Rentals",
        "address": "789 Example Boulevard, Odesa, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 5807
    },
    {
        "id": 7865,
        "year": 2020,
        "make": "Kia",
        "model": "Rio",
        "type": "Hatchback",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724156223/maxresdefault_rls8fo.jpg",
        "description": "The Kia Rio is a compact and fuel-efficient hatchback that offers a blend of affordability, reliability, and practicality, making it an excellent choice for urban commuting and everyday driving.",
        "fuelConsumption": "6.2",
        "engineSize": "1.6L 4-cylinder",
        "accessories": [
            "Apple CarPlay and Android Auto integration",
            "Smart Key with Push Button Start",
            "Automatic climate control"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Electronic Stability Control",
            "Rearview camera"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Economy Car Rentals",
        "address": "321 Example Lane, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 4618
    },
    {
        "id": 9511,
        "year": 2020,
        "make": "Volvo",
        "model": "XC60",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724155816/2020-Volvo-XC60-T6-Inscription-front-three-quarter-in-motion-2_cixvwg.jpg",
        "description": "The Volvo XC60 is a luxurious and versatile SUV that combines Scandinavian design, advanced safety features, and a comfortable driving experience, making it an ideal choice for families and adventure enthusiasts.",
        "fuelConsumption": "8.5",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Leather upholstery",
            "Panoramic sunroof",
            "Harman Kardon premium sound system"
        ],
        "functionalities": [
            "All-Wheel Drive",
            "City Safety collision avoidance technology",
            "Power tailgate"
        ],
        "rentalPrice": "$150",
        "rentalCompany": "Premium Car Rentals",
        "address": "987 Example Road, Dnipro, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 6618
    },
    {
        "id": 9618,
        "year": 2020,
        "make": "Land Rover",
        "model": "Range Rover Sport",
        "type": "SUV",
        "img": "https://res.cloudinary.com/dgdokikcv/image/upload/v1724156322/RRS_21MY_150720_01_nmco3y.jpg",
        "description": "The Land Rover Range Rover Sport is a premium SUV that offers a perfect blend of luxury, off-road capability, and dynamic performance, providing a refined driving experience both on and off the road.",
        "fuelConsumption": "11.8",
        "engineSize": "3.0L V6",
        "accessories": [
            "Premium Windsor leather seats",
            "Meridian surround sound system",
            "Adaptive Dynamics suspension"
        ],
        "functionalities": [
            "All-Wheel Drive",
            "Terrain Response 2 system",
            "Power-operated gesture tailgate"
        ],
        "rentalPrice": "$300",
        "rentalCompany": "Luxury SUV Rentals",
        "address": "654 Example Street, Lviv, Ukraine",
        "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 4856
    },
    {
        "id": 9630,
        "year": 2020,
        "make": "Kia",
        "model": "Rio",
        "type": "Sedan, Hatchback",
        "img": "https://ftp.goit.study/img/cars-test-task/kia_rio_sedan_hatchback.jpeg",
        "description": "The Kia Rio is a versatile and fuel-efficient vehicle available in both sedan and hatchback body styles, offering a comfortable cabin, modern features, and a smooth driving experience, making it an attractive choice for urban commuters.",
        "fuelConsumption": "6.2",
        "engineSize": "1.6L 4-cylinder",
        "accessories": [
            "Apple CarPlay and Android Auto integration",
            "Smart Key with Push Button Start",
            "Automatic climate control"
        ],
        "functionalities": [
            "Front-Wheel Drive",
            "Electronic Stability Control",
            "Rearview camera"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Economy Car Rentals",
        "address": "321 Example Lane, Kharkiv, Ukraine",
        "rentalConditions": "Minimum age: 21\nValid driver's license\nSecurity deposit and insurance required",
        "mileage": 6234
    }
  ];
  

  export default advertsData;
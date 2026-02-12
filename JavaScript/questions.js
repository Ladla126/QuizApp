// Array of questions grouped by category (25 questions each)

const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in Python?",
          options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
          correctAnswer: 0,
        },
        {
          question: "In JavaScript, how do you create a function?",
          options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'typeof' operator do in JavaScript?",
          options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
          correctAnswer: 0,
        },
        {
          question: "In C, how do you define a function?",
          options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is a characteristic of Python?",
          options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
          correctAnswer: 3,
        },
        {
          question: "Which language is used for Android development?",
          options: ["Python", "Java", "JavaScript", "C++"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'forEach()' method in JavaScript?",
          options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'return' keyword do in a function?",
          options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary purpose of a 'for' loop in programming?",
          options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in CSS?",
          options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following algorithms is used to sort an array by comparing elements?",
          options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'finally' block in Java do?",
          options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
          correctAnswer: 2,
        },
        {
          question: "Which data structure is best for searching elements quickly?",
          options: ["Binary search tree", "Array", "Linked list", "Queue"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct syntax for a JavaScript if statement?",
          options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "Canada", "Australia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "mathematics",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 11²?",
          options: ["121", "131", "141", "111"],
          correctAnswer: 3,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 1,
        },
        {
          question: "What is 3 × 7 + 2?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "entertainment",
      questions: [
        {
          question: "Who won the Academy Award for Best Actor in 2022?",
          options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
          correctAnswer: 1,
        },
        {
          question: "Which movie won the Academy Award for Best Picture in 2021?",
          options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
          correctAnswer: 3,
        },
        {
          question: "Who played the character of Jack Dawson in the movie Titanic?",
          options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
          correctAnswer: 0,
        },
        {
          question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
          options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
          correctAnswer: 1,
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
          correctAnswer: 0,
        },
        {
          question: "Which superhero is known for saying, 'I am Iron Man'?",
          options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
          correctAnswer: 3,
        },
        {
          question: "Which movie franchise includes a character named Luke Skywalker?",
          options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
          correctAnswer: 1,
        },
        {
          question: "Who played the character of Hermione Granger in the Harry Potter film series?",
          options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
          correctAnswer: 0,
        },
        {
          question: "Who directed the movie 'Inception'?",
          options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
          correctAnswer: 2,
        },
        {
          question: "Which artist released the album 'Lover' in 2019?",
          options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
          correctAnswer: 1,
        },
        {
          question: "What was the first video game to feature Mario?",
          options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
          correctAnswer: 2,
        },
        {
          question: "Which movie features the famous line, 'Here's looking at you, kid'?",
          options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
          correctAnswer: 0,
        },
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["France", "Germany", "Argentina", "Brazil"],
          correctAnswer: 0,
        },
        {
          question: "Who created the comic book character Spider-Man?",
          options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
          correctAnswer: 1,
        },
        {
          question: "In which movie did Heath Ledger portray the Joker?",
          options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
          correctAnswer: 0,
        },
        {
          question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
          options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
          correctAnswer: 2,
        },
        {
          question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
          options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
          correctAnswer: 2,
        },
        {
          question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
          options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
          correctAnswer: 2,
        },
        {
          question: "Which Disney animated film features the song 'A Whole New World'?",
          options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
          correctAnswer: 1,
        },
        {
          question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
          options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
          correctAnswer: 3,
        },
        {
          question: "Who sang the hit song 'Shape of You'?",
          options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
          correctAnswer: 3,
        },
        {
          question: "Which film won the Academy Award for Best Picture in 2020?",
          options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
          correctAnswer: 2,
        },
        {
          question: "What year did the movie 'The Matrix' release?",
          options: ["1997", "1998", "2000", "1999"],
          correctAnswer: 3,
        },
        {
          question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
          options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
          correctAnswer: 2,
        },
        {
          question: "Which singer is known as the 'Queen of Pop'?",
          options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
          correctAnswer: 3,
        },
      ],
    },
  
    {
      category: "computer",
      questions: [
        {
          question: "What does CPU stand for?",
          options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a type of computer memory?",
          options: ["SSD", "RAM", "GPU", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What does RAM stand for?",
          options: ["Random Access Module", "Read Access Memory", "Random Access Memory", "Rapid Access Module"],
          correctAnswer: 2,
        },
        {
          question: "What is the smallest unit of data in a computer?",
          options: ["Byte", "Kilobyte", "Bit", "Megabyte"],
          correctAnswer: 2,
        },
        {
          question: "Which operating system is developed by Microsoft?",
          options: ["macOS", "Linux", "Windows", "iOS"],
          correctAnswer: 2,
        },
        {
          question: "What does GPU stand for?",
          options: ["Graphics Processing Unit", "General Purpose Unit", "Graphics Program Unit", "Global Processing Unit"],
          correctAnswer: 0,
        },
        {
          question: "How many bits are in a byte?",
          options: ["4", "8", "16", "32"],
          correctAnswer: 1,
        },
        {
          question: "What does SSD stand for?",
          options: ["Solid State Drive", "Super Speed Drive", "Storage System Drive", "Solid System Device"],
          correctAnswer: 0,
        },
        {
          question: "Which of these is a programming language?",
          options: ["Python", "C++", "Java", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What is the main function of an operating system?",
          options: ["Run applications", "Manage hardware resources", "Provide user interface", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What does URL stand for?",
          options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Retrieve Location", "Uniform Retrieve Locator"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a web browser?",
          options: ["Firefox", "Safari", "Chrome", "Notepad"],
          correctAnswer: 3,
        },
        {
          question: "What does API stand for?",
          options: ["Application Programming Interface", "Application Process Interface", "Advanced Programming Interface", "Application Program Integration"],
          correctAnswer: 0,
        },
        {
          question: "What is the main purpose of a firewall?",
          options: ["Speed up internet", "Protect network security", "Reduce power consumption", "Increase storage"],
          correctAnswer: 1,
        },
        {
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Virtual Protected Network", "Virtual Protocol Network", "Very Private Network"],
          correctAnswer: 0,
        },
        {
          question: "Which file format is used for images?",
          options: ["PNG", "JPEG", "GIF", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What does BIOS stand for?",
          options: ["Basic Input/Output System", "Basic Integrated Operating System", "Basic Internal Operating Structure", "Basic Input Output Sequence"],
          correctAnswer: 0,
        },
        {
          question: "Which of these is a cloud storage service?",
          options: ["Google Drive", "Dropbox", "OneDrive", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What does HTML render as?",
          options: ["Web pages", "Applications", "Images", "Videos"],
          correctAnswer: 0,
        },
        {
          question: "What is cybersecurity?",
          options: ["Protection against digital attacks", "Creating computer viruses", "Designing websites", "Installing software"],
          correctAnswer: 0,
        },
        {
          question: "Which cloud platform is owned by Amazon?",
          options: ["Azure", "AWS", "Google Cloud", "Heroku"],
          correctAnswer: 1,
        },
        {
          question: "What does IoT stand for?",
          options: ["Internet of Technology", "Internet of Things", "Integrated Operations Technology", "Internet on Tablets"],
          correctAnswer: 1,
        },
        {
          question: "What is machine learning?",
          options: ["Learning to use machines", "Teaching computers to learn from data", "Installing software updates", "Programming languages"],
          correctAnswer: 1,
        },
        {
          question: "What does JSON stand for?",
          options: ["Java Script Object Notation", "JavaScript Object Notation", "Java System Object Name", "JavaScript Operating Notation"],
          correctAnswer: 1,
        },
        {
          question: "What is a server in computing?",
          options: ["A person who serves food", "A computer that provides data/services", "A software that browses internet", "A device that stores games"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "biology",
      questions: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
          correctAnswer: 1,
        },
        {
          question: "How many chromosomes do humans have?",
          options: ["23", "46", "48", "52"],
          correctAnswer: 1,
        },
        {
          question: "What is the process by which plants make their own food?",
          options: ["Respiration", "Photosynthesis", "Fermentation", "Decomposition"],
          correctAnswer: 1,
        },
        {
          question: "What is the basic unit of life?",
          options: ["Atom", "Organ", "Tissue", "Cell"],
          correctAnswer: 3,
        },
        {
          question: "What type of blood cells fight infections?",
          options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
          correctAnswer: 1,
        },
        {
          question: "What is the largest organ in the human body?",
          options: ["Brain", "Heart", "Skin", "Liver"],
          correctAnswer: 2,
        },
        {
          question: "What do enzymes do in the body?",
          options: ["Store energy", "Speed up chemical reactions", "Fight infections", "Carry oxygen"],
          correctAnswer: 1,
        },
        {
          question: "How many bones are in an adult human body?",
          options: ["186", "206", "266", "306"],
          correctAnswer: 1,
        },
        {
          question: "What is DNA?",
          options: ["An enzyme", "A protein", "A molecule that carries genetic information", "A type of carbohydrate"],
          correctAnswer: 2,
        },
        {
          question: "Which of these is a function of the liver?",
          options: ["Pump blood", "Filter blood", "Fight infections", "Produce insulin"],
          correctAnswer: 1,
        },
        {
          question: "What is the main function of the kidneys?",
          options: ["Pump blood", "Produce hormones", "Filter waste from blood", "Digest food"],
          correctAnswer: 2,
        },
        {
          question: "What is glucose primarily used for?",
          options: ["Building muscles", "Energy production", "Fighting infections", "Making bones"],
          correctAnswer: 1,
        },
        {
          question: "What is the process of asexual reproduction in single-celled organisms?",
          options: ["Fertilization", "Binary fission", "Budding", "Conjugation"],
          correctAnswer: 1,
        },
        {
          question: "What produces insulin in the human body?",
          options: ["Liver", "Pancreas", "Thyroid", "Adrenal gland"],
          correctAnswer: 1,
        },
        {
          question: "Which of these is an example of a vertebrate?",
          options: ["Insect", "Fish", "Worm", "Jellyfish"],
          correctAnswer: 1,
        },
        {
          question: "What is the main function of the lungs?",
          options: ["Pump blood", "Digest food", "Exchange oxygen and carbon dioxide", "Store energy"],
          correctAnswer: 2,
        },
        {
          question: "What is the process of breaking down food into smaller molecules?",
          options: ["Photosynthesis", "Digestion", "Respiration", "Circulation"],
          correctAnswer: 1,
        },
        {
          question: "Which vitamin is produced when skin is exposed to sunlight?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          correctAnswer: 3,
        },
        {
          question: "What is the smallest blood vessel in the human body?",
          options: ["Artery", "Vein", "Capillary", "Vessel"],
          correctAnswer: 2,
        },
        {
          question: "What layer of the skin contains melanin?",
          options: ["Epidermis", "Dermis", "Hypodermis", "Stratum corneum"],
          correctAnswer: 0,
        },
        {
          question: "What is the function of antibodies?",
          options: ["Carry oxygen", "Destroy pathogens", "Store energy", "Produce hormones"],
          correctAnswer: 1,
        },
        {
          question: "Which of these is a type of tissue?",
          options: ["Muscle", "Organ", "System", "Cell"],
          correctAnswer: 0,
        },
        {
          question: "What is the process of cell division called?",
          options: ["Meiosis", "Mitosis", "Diffusion", "Osmosis"],
          correctAnswer: 1,
        },
        {
          question: "What is photosynthesis powered by?",
          options: ["Heat", "Water", "Sunlight", "Oxygen"],
          correctAnswer: 2,
        },
        {
          question: "Which gland controls growth and metabolism?",
          options: ["Pancreas", "Thyroid", "Pituitary", "Adrenal"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "html",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
          correctAnswer: 0,
        },
        {
          question: "Which tag is used for the largest heading in HTML?",
          options: ["<h6>", "<h3>", "<h1>", "<heading>"],
          correctAnswer: 2,
        },
        {
          question: "Which tag is used to create a paragraph in HTML?",
          options: ["<p>", "<para>", "<paragraph>", "<text>"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct way to create a hyperlink in HTML?",
          options: ["<link>Google</link>", "<a href='url'>Google</a>", "<url>Google</url>", "<hyperlink>Google</hyperlink>"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used to insert an image in HTML?",
          options: ["<image>", "<img>", "<picture>", "<photo>"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct HTML structure tag?",
          options: ["<html> <body> </body> </html>", "<html> <head> <body> </body> </head> </html>", "<html> <head> </head> <body> </body> </html>", "<body> <head> </head> </body>"],
          correctAnswer: 2,
        },
        {
          question: "Which tag is used for an unordered list in HTML?",
          options: ["<ol>", "<ul>", "<list>", "<li>"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used for an ordered list in HTML?",
          options: ["<ol>", "<ul>", "<olist>", "<ordered>"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct way to add a comment in HTML?",
          options: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "/* This is a comment */"],
          correctAnswer: 0,
        },
        {
          question: "Which tag is used to define a form in HTML?",
          options: ["<input>", "<form>", "<field>", "<data>"],
          correctAnswer: 1,
        },
        {
          question: "Which attribute is used to provide a unique identifier to an element?",
          options: ["class", "id", "name", "unique"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used to define a table in HTML?",
          options: ["<data>", "<table>", "<grid>", "<tab>"],
          correctAnswer: 1,
        },
        {
          question: "What does the <meta> tag do in HTML?",
          options: ["Adds metadata about HTML document", "Creates a menu", "Defines main content", "Adds styling"],
          correctAnswer: 0,
        },
        {
          question: "Which tag is used to link an external CSS file?",
          options: ["<style>", "<CSS>", "<link>", "<external>"],
          correctAnswer: 2,
        },
        {
          question: "What is the correct way to make a hyperlink open in a new tab?",
          options: ["<a href='url' new>", "<a href='url' target='_blank'>", "<a href='url' newtab>", "<a href='url' open='new'>"],
          correctAnswer: 1,
        },
        {
          question: "Which HTML5 tag is used for footer content?",
          options: ["<bottom>", "<footer>", "<foot>", "<end>"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used to define a navigation link in HTML5?",
          options: ["<navbar>", "<navigation>", "<nav>", "<menu>"],
          correctAnswer: 2,
        },
        {
          question: "How do you add a line break in HTML?",
          options: ["<line>", "<lb>", "<br>", "<break>"],
          correctAnswer: 2,
        },
        {
          question: "Which tag is used to define article content in HTML5?",
          options: ["<content>", "<post>", "<article>", "<text>"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the DOCTYPE declaration?",
          options: ["Define styles", "Specify document type", "Create elements", "Link files"],
          correctAnswer: 1,
        },
        {
          question: "Which attribute specifies the URL of an external resource?",
          options: ["src", "url", "href", "path"],
          correctAnswer: 2,
        },
        {
          question: "Which tag is used to create a dropdown list?",
          options: ["<drop>", "<dropdown>", "<select>", "<option>"],
          correctAnswer: 2,
        },
        {
          question: "What is semantic HTML?",
          options: ["HTML with styling", "HTML that gives meaning to content", "HTML without CSS", "HTML for forms only"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used for a section of content in HTML5?",
          options: ["<div>", "<section>", "<part>", "<block>"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct way to add JavaScript to HTML?",
          options: ["<javascript>", "<script>", "<js>", "<code>"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "css",
      questions: [
        {
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
          correctAnswer: 1,
        },
        {
          question: "How do you select an element with a specific id in CSS?",
          options: [".idname", "#idname", "*idname", "&idname"],
          correctAnswer: 1,
        },
        {
          question: "How do you select all elements with a specific class in CSS?",
          options: ["#classname", ".classname", "*classname", "&classname"],
          correctAnswer: 1,
        },
        {
          question: "Which property is used to change the text color in CSS?",
          options: ["text-color", "color", "font-color", "text-style"],
          correctAnswer: 1,
        },
        {
          question: "Which property is used to change the background color?",
          options: ["background-color", "bg-color", "color", "fill"],
          correctAnswer: 0,
        },
        {
          question: "How do you add a border to an element?",
          options: ["border: 1px solid black;", "outline: 1px solid black;", "stroke: 1px solid black;", "frame: 1px solid black;"],
          correctAnswer: 0,
        },
        {
          question: "What is the default value of the position property?",
          options: ["absolute", "relative", "static", "fixed"],
          correctAnswer: 2,
        },
        {
          question: "Which property is used to set the distance between elements?",
          options: ["distance", "space", "margin", "padding"],
          correctAnswer: 2,
        },
        {
          question: "Which property is used to set space inside an element?",
          options: ["margin", "padding", "spacing", "border"],
          correctAnswer: 1,
        },
        {
          question: "How do you make text bold in CSS?",
          options: ["font-weight: bold;", "text-weight: bold;", "font-style: bold;", "text-bold: true;"],
          correctAnswer: 0,
        },
        {
          question: "Which property is used to center text?",
          options: ["align-text", "text-align", "center", "align"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'z-index' property do?",
          options: ["Sets width", "Sets height", "Controls layer order", "Sets color"],
          correctAnswer: 2,
        },
        {
          question: "How do you apply multiple styles to a selector?",
          options: ["Using commas", "Using semicolons", "Using periods", "Using brackets"],
          correctAnswer: 1,
        },
        {
          question: "Which display value hides an element?",
          options: ["display: hidden;", "display: none;", "visibility: hidden;", "Both B and C"],
          correctAnswer: 3,
        },
        {
          question: "What does 'float' property do in CSS?",
          options: ["Makes text italic", "Positions elements side by side", "Adds animation", "Sets color"],
          correctAnswer: 1,
        },
        {
          question: "How do you create a comment in CSS?",
          options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
          correctAnswer: 2,
        },
        {
          question: "Which property is used to add shadow to text?",
          options: ["text-shadow", "shadow", "font-shadow", "text-effect"],
          correctAnswer: 0,
        },
        {
          question: "What is the default font size in HTML?",
          options: ["12px", "14px", "16px", "18px"],
          correctAnswer: 2,
        },
        {
          question: "Which property is used to change cursor style on hover?",
          options: ["mouse", "hover-cursor", "cursor", "pointer-style"],
          correctAnswer: 2,
        },
        {
          question: "What does 'flexbox' do in CSS?",
          options: ["Creates tables", "Creates flexible layouts", "Adds animation", "Sets colors"],
          correctAnswer: 1,
        },
        {
          question: "How do you make an element transparent?",
          options: ["opacity: 0;", "transparency: 0;", "visible: false;", "display: none;"],
          correctAnswer: 0,
        },
        {
          question: "Which property creates rounded corners?",
          options: ["corner-radius", "border-round", "border-radius", "round-corner"],
          correctAnswer: 2,
        },
        {
          question: "What does the 'transform' property do?",
          options: ["Changes colors", "Moves, scales, or rotates elements", "Adds shadows", "Adds text effects"],
          correctAnswer: 1,
        },
        {
          question: "Which property is used to add animations?",
          options: ["@animate", "@keyframes", "@animation", "@motion"],
          correctAnswer: 1,
        },
        {
          question: "What is a CSS preprocessor?",
          options: ["A tool that compiles CSS", "A language that extends CSS", "A CSS validator", "All of the above"],
          correctAnswer: 3,
        },
      ],
    },
  
    {
      category: "javascript",
      questions: [
        {
          question: "Which keyword is used to declare a variable in JavaScript?",
          options: ["var", "let", "const", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What does 'console.log()' do?",
          options: ["Prints to browser console", "Logs errors", "Creates a console window", "Logs network activity"],
          correctAnswer: 0,
        },
        {
          question: "How do you create a function in JavaScript?",
          options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "define myFunc() {}"],
          correctAnswer: 0,
        },
        {
          question: "What does '===' operator do in JavaScript?",
          options: ["Compares values", "Strictly compares values and types", "Assigns values", "Adds values"],
          correctAnswer: 1,
        },
        {
          question: "Which array method removes the last element?",
          options: ["remove()", "shift()", "pop()", "delete()"],
          correctAnswer: 2,
        },
        {
          question: "What does 'push()' method do?",
          options: ["Removes element", "Adds element to end", "Removes first element", "Adds element to start"],
          correctAnswer: 1,
        },
        {
          question: "How do you check if a variable is an array?",
          options: ["typeof arr === 'array'", "Array.isArray(arr)", "arr instanceof array", "arr.isArray()"],
          correctAnswer: 1,
        },
        {
          question: "What does 'parseInt()' do?",
          options: ["Parses CSS", "Converts string to integer", "Parses HTML", "Converts integer to string"],
          correctAnswer: 1,
        },
        {
          question: "Which method converts object to string in JavaScript?",
          options: ["toString()", "toStr()", "stringify()", "parse()"],
          correctAnswer: 0,
        },
        {
          question: "What is a closure in JavaScript?",
          options: ["Closing a function", "A function with access to outer scope", "A function that closes", "An error in code"],
          correctAnswer: 1,
        },
        {
          question: "What does 'this' keyword refer to?",
          options: ["Current document", "Current object context", "Previous object", "Function name"],
          correctAnswer: 1,
        },
        {
          question: "How do you add an element to an array?",
          options: ["array.add()", "array.push()", "array.append()", "array.insert()"],
          correctAnswer: 1,
        },
        {
          question: "What is an API?",
          options: ["Application Programming Interface", "Application Process Interface", "Data interface", "Server interface"],
          correctAnswer: 0,
        },
        {
          question: "What does 'JSON.parse()' do?",
          options: ["Converts JSON string to object", "Validates JSON", "Stringifies object", "Merges objects"],
          correctAnswer: 0,
        },
        {
          question: "What does 'JSON.stringify()' do?",
          options: ["Parses JSON", "Converts object to JSON string", "Validates JSON", "Merges JSON"],
          correctAnswer: 1,
        },
        {
          question: "How do you access the first element of an array?",
          options: ["array.first()", "array[0]", "array.get(0)", "array.item(0)"],
          correctAnswer: 1,
        },
        {
          question: "What does 'slice()' method do?",
          options: ["Splits array", "Returns a shallow copy of portion", "Removes elements", "Adds elements"],
          correctAnswer: 1,
        },
        {
          question: "Which keyword is used to handle errors?",
          options: ["error", "catch", "throw", "try"],
          correctAnswer: 3,
        },
        {
          question: "What is a Promise in JavaScript?",
          options: ["A function", "An object that resolves to a value", "A loop", "A variable type"],
          correctAnswer: 1,
        },
        {
          question: "What does 'async/await' do?",
          options: ["Waits for function", "Handles asynchronous code", "Creates new variables", "Defines constants"],
          correctAnswer: 1,
        },
        {
          question: "How do you select an HTML element by id?",
          options: ["document.getElementByClass()", "document.getElementById()", "document.querySelector()", "document.select()"],
          correctAnswer: 1,
        },
        {
          question: "What does 'addEventListener()' do?",
          options: ["Removes event listener", "Adds event listener to element", "Triggers event", "Checks for listeners"],
          correctAnswer: 1,
        },
        {
          question: "What is the difference between 'let' and 'var'?",
          options: ["No difference", "let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "They are used for different data types"],
          correctAnswer: 1,
        },
        {
          question: "What does the 'spread operator' (...) do?",
          options: ["Spreads code", "Expands iterables", "Merges objects", "All of the above"],
          correctAnswer: 3,
        },
        {
          question: "What is destructuring in JavaScript?",
          options: ["Breaking code", "Unpacking values from objects/arrays", "Deleting values", "Modifying structure"],
          correctAnswer: 1,
        },
      ],
    },
  ];
  
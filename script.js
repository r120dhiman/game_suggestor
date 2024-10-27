function suggestGames() {
    const selectedItems = Array.from(document.querySelectorAll('input[name="item"]:checked')).map(item => item.id);
    const gameSuggestions = document.querySelector(".gamesuggestion");
    gameSuggestions.innerHTML = "<h1>Game Suggestions</h1>"; // Clear previous suggestions

    // Game suggestions with YouTube links
    const games = {
        paper: [
            { 
                title: "Paper Airplane Contest", 
                videoUrl: "https://www.youtube.com/embed/veyZNyurlwU?si=y_6tmc4Oo6qoeUgS",
                description: "Learn how to make different types of paper airplanes and set up a fun competition to see which design flies the furthest!" 
            },
            { 
                title: "Draw and Color", 
                videoUrl: "https://www.youtube.com/embed/UW6H5dAPuhY?si=C0AenDGTmpIhAucI", 
                description: "Unleash your creativity with a fun, relaxing drawing and coloring session using a variety of techniques and colors." 
            }
        ],
        crayons: [
            { 
                title: "Coloring Adventure", 
                videoUrl: "https://www.youtube.com/embed/nn5VqbMSsPU?si=Asg-_lWfoQeVG3bO", 
                description: "Embark on a coloring journey, filling illustrations with vibrant colors and bringing scenes to life with crayons." 
            },
            { 
                title: "Draw Family Portraits", 
                videoUrl: "https://www.youtube.com/embed/CY-A5huAFSQ?si=VuRmT2fh946iKQHS", 
                description: "Create memorable family portraits through drawing, capturing everyone’s unique expressions and styles." 
            }
        ],
        pillows: [
            { 
                title: "Pillow Fort", 
                videoUrl: "https://www.youtube.com/embed/v5-qiMV7iAY?si=lgMQp24kZv3TmfYZ", 
                description: "Build an amazing pillow fort, using cushions and blankets to design a cozy hideaway or mini playroom." 
            },
            { 
                title: "Obstacle Course", 
                videoUrl: "https://www.youtube.com/embed/2gltvmUKfmk?si=x39Ra6dV349VEj8R", 
                description: "Set up a playful obstacle course using pillows, creating a safe and fun challenge for kids to navigate." 
            }
        ],
        cardboard_box: [
            { 
                title: "Box Maze", 
                videoUrl: "https://www.youtube.com/embed/rMSI1XQiDXY?si=ShdjfMO3UGTN4E_t", 
                description: "Transform cardboard boxes into a thrilling maze or tunnel system for hours of adventurous play." 
            },
            { 
                title: "Decorate a Playhouse", 
                videoUrl: "https://www.youtube.com/embed/KO7A9W2Di6U?si=ZKQL0ODQp5GX0RN2", 
                description: "Use paint, stickers, and creativity to design and decorate a cardboard playhouse, turning it into a mini-home." 
            }
        ],
        "plastic-bottles": [
            { 
                title: "Bottle Bowling", 
                videoUrl: "https://www.youtube.com/embed/olN2wl0I5No?si=W2hbnQx05TvvL-bb", 
                description: "Recycle plastic bottles to create a fun bowling game – set up your pins, roll a ball, and enjoy this DIY activity." 
            },
            { 
                title: "Water Bottle Tower", 
                videoUrl: "https://www.youtube.com/embed/EQPPE6iKd-g?si=Za3m5zYXjcxi7EkD", 
                description: "Stack empty water bottles into a tower, testing balance and aiming to build it as high as possible without tipping." 
            }
        ],
        "toilet-paper-rolls": [
            { 
                title: "Toilet Paper Roll Cat", 
                videoUrl: "https://www.youtube.com/embed/clN1NiPXkeY?si=cqpFlgAd93tokVfT", 
                description: "Transform a simple toilet paper roll into a cute cat craft, perfect for kids to create and decorate." 
            },
            { 
                title: "DIY Toilet Paper Roll Binoculars", 
                videoUrl: "https://www.youtube.com/embed/8uuoF-uRI6Q?si=WY7w923zRAROXkdP", 
                description: "Make a pair of binoculars using toilet paper rolls – perfect for imaginative adventures and exploration games." 
            }
        ],
        "old-clothes": [
            { 
                title: "DIY Sock Puppets", 
                videoUrl: "https://www.youtube.com/embed/oS_59QusU1o?si=ZSu7-hFV93i0CSG4", 
                description: "Repurpose old socks by turning them into fun and expressive sock puppets, adding eyes, hair, and colorful decorations." 
            },
            { 
                title: "T-Shirt Tote Bags", 
                videoUrl: "https://www.youtube.com/embed/o75LptAui2g?si=DP5UdRS_L1hA-lDJ", 
                description: "Convert old t-shirts into handy tote bags – an eco-friendly and creative project that kids will love." 
            }
        ],
        "bottles": [
            { 
                title: "Bottle Cap Tic-Tac-Toe", 
                videoUrl: "https://www.youtube.com/embed/FoxaDYdCMGc?si=odhB58_cen-oyF7K", 
                description: "Create a tic-tac-toe game using bottle caps, making a simple, portable game board for endless rounds of fun." 
            },
            { 
                title: "Water Bottle Rocket", 
                videoUrl: "https://www.youtube.com/embed/N8pZZKgha-w?si=qP087VtWNKOg4tgu", 
                description: "Build a rocket using a water bottle and learn how to launch it high into the air with a fun DIY experiment." 
            }
        ],
        "paper-plates": [
            { 
                title: "Paper Plate Animals", 
                videoUrl: "https://www.youtube.com/embed/jBsfcQwJDsQ?si=gdD50Dzb2ivTL2S_", 
                description: "Use paper plates to create adorable animal crafts, adding colors, shapes, and details to bring them to life." 
            },
            { 
                title: "Paper Plate Mask", 
                videoUrl: "https://www.youtube.com/embed/vtBSMRga6Ts?si=UYOJDcOH4DvtGIzD", 
                description: "Make a fun mask out of paper plates, decorating it to become a unique character or animal face." 
            }
        ],
        "spoons": [
            { 
                title: "Spoon Catapult", 
                videoUrl: "https://www.youtube.com/embed/2QfOu8tzS7s?si=mcAAQc1vUR9-4dht", 
                description: "Build a small catapult using spoons and launch tiny objects, learning the basics of physics and engineering." 
            },
            { 
                title: "DIY Spoon Puppets", 
                videoUrl: "https://www.youtube.com/embed/X82FzVKumxk?si=FetoN5QIagLzc0FB", 
                description: "Turn spoons into puppets by decorating them with faces, yarn hair, and accessories for imaginative play." 
            }
        ],
        "balloons": [
            { 
                title: "Balloon Volleyball", 
                videoUrl: "https://www.youtube.com/embed/Q9HYIbRs0es?si=aIOOgT4-YeNzDR2B", 
                description: "Play an indoor game of volleyball using a balloon, a safe and fun way to enjoy some active play." 
            },
            { 
                title: "Balloon Rocket", 
                videoUrl: "https://www.youtube.com/embed/TfZsGy_q9zA?si=XsBGx52VrveRkFDm", 
                description: "Make a balloon-powered rocket that zooms across the room, teaching kids basic principles of propulsion." 
            }
        ]
        
    };
    
    // Generate game ideas based on selected items
    if (selectedItems.length === 0) {
        gameSuggestions.innerHTML = "<p>Please select at least one item to see game ideas!</p>";
    } else {
        selectedItems.forEach(item => {
            const gameIdeas = games[item] || [];
            gameIdeas.forEach(({ title, videoUrl,description }) => {
                gameSuggestions.innerHTML += `
                <div class="gamecard">
                    <div class="leftpart">
                        <h1>${title}</h1>
                        <p>${description}</p>
                    </div>
                    <div class="rightpart">
                        <iframe class="video1" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>`;
            });
        });
    }
}

const gameoption = document.querySelector('.gameoptions');
const showmore = document.getElementById('show_more');

// Track if more options are shown
let isMoreShown = false;

showmore.addEventListener("click", () => {
    if (!isMoreShown) {
        gameoption.innerHTML += `
        <label for="toilet-paper-rolls"><input type="checkbox" name="item" id="toilet-paper-rolls">Toilet Paper Rolls</label>
        <label for="old-clothes"><input type="checkbox" name="item" id="old-clothes">Old Clothes</label>
        <label for="bottles"><input type="checkbox" name="item" id="bottles">Bottles</label>
        <label for="paper-plates"><input type="checkbox" name="item" id="paper-plates">Paper Plates</label>
        <label for="spoons"><input type="checkbox" name="item" id="spoons">Spoons</label>
        <label for="balloons"><input type="checkbox" name="item" id="balloons">Balloons</label>`;
        showmore.textContent = "Back"; // Change text to Back
        isMoreShown = true;
    } else {
        // Reset to original options
        gameoption.innerHTML = `
        <label for="paper"><input type="checkbox" name="item" id="paper">Paper</label>
        <label for="crayons"><input type="checkbox" name="item" id="crayons">Crayons</label>
        <label for="pillows"><input type="checkbox" name="item" id="pillows">Pillows</label>
        <label for="cardboard_box"><input type="checkbox" name="item" id="cardboard_box">Cardboard Box</label>
        <label for="plastic-bottles"><input type="checkbox" name="item" id="plastic-bottles">Plastic Bottles</label>`;
        showmore.textContent = "Show More"; // Change text back to Show More
        isMoreShown = false;
    }
});

// Add event listener for the search button
document.querySelector(".options button[type='button']:nth-child(2)").addEventListener("click", suggestGames);

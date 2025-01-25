export const mcqData = {
    mcqs: [
        {
            question: {
                text: "What is the capital of France?",
                animations: [
                    {
                        type: "highlight",
                        startFrame: 0,
                        endFrame: 30,
                    },
                ],
                style: {
                    fontSize: "32px",
                    color: "#333",
                    position: {
                        x: 100,
                        y: 50,
                    },
                },
            },
            options: [
                {
                    text: "Berlin",
                    animations: [
                        {
                            type: "circle",
                            startFrame: 30,
                            endFrame: 60,
                        },
                    ],
                    style: {
                        fontSize: "24px",
                        color: "#555",
                        position: {
                            x: 100,
                            y: 150,
                        },
                    },
                },
                {
                    text: "Madrid",
                    animations: [
                        {
                            type: "cross",
                            startFrame: 60,
                            endFrame: 90,
                        },
                    ],
                    style: {
                        fontSize: "24px",
                        color: "#555",
                        position: {
                            x: 100,
                            y: 200,
                        },
                    },
                },
                {
                    text: "Paris",
                    animations: [
                        {
                            type: "highlight",
                            startFrame: 90,
                            endFrame: 120,
                        },
                    ],
                    style: {
                        fontSize: "24px",
                        color: "#555",
                        position: {
                            x: 100,
                            y: 250,
                        },
                    },
                },
            ],
        },
    ],
}
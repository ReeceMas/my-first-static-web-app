
const { app } = require('@azure/functions');

app.http('AdditionFunction', {
    methods: ['GET'],
    authLevel: 'anonymous',

    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const num1 = parseFloat(request.query.get('num1')) || 0;
        const num2 = parseFloat(request.query.get('num2')) || 0;

        const answer = num1 + num2;

        return {
            status: 200,
            body: `The answer is ${answer}`
        };
    }
});

export default function Format({descriptor}) {
    const method = descriptor.value;

    descriptor.value = async function (...args) {
        try {
            const {data, headers} = await method.apply(this, args);

            return {
                data,
                headers
            };

        } catch ({response: {data, status}}) {
            return {
                errors: data,
                unauthorized: 401 === status
            };
        }
    };
}
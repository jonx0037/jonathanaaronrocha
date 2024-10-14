import dynamic from 'next/dynamic';
import Loading from '../components/Loading'; // A custom loading component

const DynamicComponent = dynamic(() => import('../components/MyComponent'), {
    loading: () => <Loading />,
    ssr: false, // Disable server-side rendering if needed
});

const HomePage = () => (
    <div>
        <h1>Welcome to the Home Page</h1>
        <DynamicComponent />
    </div>
);

export default HomePage;
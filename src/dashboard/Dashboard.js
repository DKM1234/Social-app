import { useState } from "react";
import ComponentA from './ComponentsA';
import ComponentB from './ComponentsB';
import ComponentC from './ComponentsC';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ComponentA');

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="container mt-4">
      <div className="btn-group">
        <button
          type="button"
          className={`btn ${activeComponent === 'ComponentA' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleComponentChange('ComponentA')}
        >
          Friend List
        </button>
        <button
          type="button"
          className={`btn ${activeComponent === 'ComponentB' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleComponentChange('ComponentB')}
        >
          My Friend
        </button>
        <button
          type="button"
          className={`btn ${activeComponent === 'ComponentC' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleComponentChange('ComponentC')}
        >
          Group Chat
        </button>
      </div>

      {/* Render the active component based on the state */}
      {activeComponent === 'ComponentA' && <ComponentA />}
      {activeComponent === 'ComponentB' && <ComponentB />}
      {activeComponent === 'ComponentC' && <ComponentC />}
    </div>
  );
};

export default Dashboard;

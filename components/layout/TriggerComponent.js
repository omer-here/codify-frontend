import { useClient } from 'next/navigation';

export default function TriggerComponent() {
    const openSideWindow = () => async () => {
      // Open a new window or tab with options for size and position
      const windowFeatures = `width=500,height=400,left=500,top=200`;
      const newWindow = window.open('/dashboard', '_blank', windowFeatures);
    };
  
    return (
      <button onClick={openSideWindow}>Open Side Window</button>
    );
  }
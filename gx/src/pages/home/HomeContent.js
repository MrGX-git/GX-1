import { useState } from 'react';

import Changed from '../../components/Changed';
import Welcome from '../../components/Welcome';

const HomeContent =()=> {
    const [showWelcome, setShowWelcome] = useState(false);
    
    const renderContent =()=> {
      let content;
  
      if(showWelcome) {
          content = <Changed title="აბა მერავიცი" subTitle="რავი რამე რვა"/>;
      } else {
          content = <Welcome user="შალვა ნათელაშვილი" age={2045}/>;
      }

      return content;
    }

    const handleClick = () => {
        console.log('__showWelcome__', showWelcome);
        setShowWelcome(!showWelcome);
    };

    return (
      <>
        <button 
          className="btn btn-outline-success" 
          onClick={handleClick}  
        >
            ჩააწკაპუნე
        </button>
        <hr />
        {renderContent()}
      </>
    );
};

export default HomeContent;

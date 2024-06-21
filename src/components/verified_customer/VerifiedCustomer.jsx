import './VerifiedCustomer.css';
import { VerifiedRounded } from '@mui/icons-material';

function VerifiedCustomer() {
    return (
        <div className='customerContainer'>
            <VerifiedRounded 
            style={
                { color: '#8DA260'
            
          }
          }/>
            <p className='p_customerContainer'>Verified Customer </p>
        </div>
    );
}

export default VerifiedCustomer; 
 
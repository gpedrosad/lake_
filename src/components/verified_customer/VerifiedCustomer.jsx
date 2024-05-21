import './VerifiedCustomer.css';
import { VerifiedRounded } from '@mui/icons-material';

function VerifiedCustomer() {
    return (
        <div className='customerContainer'>
            <VerifiedRounded style={{ color: 'green' }} />
            <p className='p_customerContainer'>Verified Customer</p>
        </div>
    );
}

export default VerifiedCustomer;
 
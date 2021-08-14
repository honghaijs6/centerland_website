
import moment from 'moment';
import 'moment/locale/vi';


const myTime = {

    format(strDate){

        return moment(strDate).format('L','vi')
    }
}

export default myTime ;

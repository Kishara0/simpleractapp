import Student from './Student';

export default function Mainbody(){
    const leccount=3;
return(
    <div style={{minHeight:"70vh"}}>
        <p>Wellcome to TaskOpedia
        <br/>
        <br/>
        Total lecture = {leccount}
         </p>
        <ul>
            <li>Call to mom</li>
            <li>Go to Shop</li>
        </ul>
        <div>
            Enter Task : <input maxLength={5} placeholder="Run"></input>
        </div>
        <div className='container row'>
                Students Enrolled
            </div>
            <div>
    <Student programmingExp={2} fullname="Kris Walley" headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student programmingExp={3} fullname="jayantha welgama" headshot="https://api.lorem.space/image/face?w=150&h=151" />
    <Student programmingExp={2} fullname="proyar kamir" headshot="https://api.lorem.space/image/face?w=150&h=154" />
    </div>
    </div>
)
}
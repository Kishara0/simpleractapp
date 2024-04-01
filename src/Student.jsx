
export default function Student(props){
   
    return(
        <div className="col-4 p-1">
            
            <div className='row border'>
                <div className='col-2'>
                    <img 
                    src={props.headshot}
                    alt=""
                    className="w-100 py-2"></img>
                </div>
                <div className="col-10"> 
                    {props.fullname}<br/>
                    Programming Experience {props.programmingExp} years
                </div>
            </div>
        </div>
    )

}
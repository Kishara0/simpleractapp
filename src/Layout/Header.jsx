import image from "../image/react.png"
    
    function Mainheader(){
        return(
            <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
                <img src={image} style={{height:"35px",verticalAlign:"top"}}></img>
                <span className="h2 pt-4 text-white-50">Basic React app-Task-O-pedia </span>
            </div>
        )
        }
        const SubheaderStyle={
    color: "blueviolet",
    backgroundColor: "lightgray",
    
        };
    function Subheader(){
            return(
                <div>
                    <p style={SubheaderStyle} className="text-center">This will be exiting App</p>
                </div>
            )
            }

            function Header(){
                return(
                    <div>
                    <Mainheader/>
                    <Subheader/>
                    </div>
                    
                )
                }
            export default Header;


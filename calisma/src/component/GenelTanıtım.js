import React, { Component } from "react";
import DataConsumer from "../context";

 class GenelTanıtım extends Component {
  render() {
    return (

      <DataConsumer>
        {(value) => {
          const Data= value 

console.log (Data)

return ( 
 < div className="GenelTanıtım"> 
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 <div className="GenelTanitimIcerik" > 

 

{  Data.Haberler[0].HaberId   }

</div>
 </div>);
    }}
      </DataConsumer>
      
    );
  }
  
}
export default GenelTanıtım;

import React,{useState} from 'react'
import {Link} from "react-router-dom";
const Eventslist = () => {

    const myData=[
        {
            "name": "Stand up comedy",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fBSEoRFLPSROldsSqUdr6_eFL-xC5gDdUg&usqp=CAU",
            "mobile": "2022-07-17",
            "email": "abc@gmail.com",
            "company": "Ajmer",
            "title": "\"CHILDHOOD DREAMS",
            "groupId": "1",
            "id": 1,
            "date": "2022-07-15",
            "location": "Ajmer"
          },
          {
            "name": "Dance Competition ",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQALLYrXrKMVUub-xg-N_owtc8jg7ymPG_A&usqp=CAU",
            "mobile": "2022-07-20",
            "email": "dance@gmail.com",
            "company": "Jaipur",
            "title": "\"TIP TAP TOE\"",
            "groupId": "2",
            "id": 2,
            "date": "2022-07-20",
            "location": "Jaipur"
          },
          {
            "name": "OPEN MIC",
            "photo": "data:image/jpeg;base64,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",
            "mobile": "2022-08-10",
            "email": "opn@gmail.com",
            "company": "Jaipur",
            "title": "\"Your time to Shine\"",
            "groupId": "3",
            "id": 4,
            "date": "2022-07-25",
            "location": "Jaipur"
          },
          {
            "name": "MERAKI",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLjVnzxeITI10zK6UVEB_udynSp_QhIr9vg&usqp=CAU",
            "mobile": "2022-09-09",
            "email": "meraki@gmail.com",
            "company": "Pune",
            "title": "\"The best looks\"",
            "groupId": "7",
            "id": 5,
            "date": "2022-08-09",
            "location": "Pune"
          },
          {
            "name": "Save Soil",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPc-NVxGrTb2GapY4XAU9y2Z54wulQP2AZQ&usqp=CAU",
            "date": "2022-09-10",
            "email": "ss@gmail.com",
            "company": "Mumbai",
            "title": "\"A Journey to Save Soil\"",
            "groupId": "8",
            "id": 6,
            "location": "Mumbai"
          },
          {
            "name": "Amul Live Session",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30cX6PwA7K6TtxCgR0Z6WA1ElHV-DliwdCw&usqp=CAU",
            "date": "2022-09-20",
            "email": "amul@gmail.com",
            "company": "Jodhpur",
            "title": "\"The Taste of India\"",
            "groupId": "9",
            "id": 7,
            "location": "Jodhpur"
          }  
    ]

    const [myArray, setmyArray]=useState(myData);

    const clearArray=()=>{
        setmyArray([]);
    }
const removeEle=(id)=>{
        //alert(id);
        const mynewArray=myArray.filter((currElm)=>{
            return currElm.id!==id;
        })
        setmyArray(mynewArray);
    }


const clickDelete=()=>{
    setmyArray([])
}
const filteredEvents=()=>{
    
}
const query=()=>{

}
const searchEvents=()=>{

}

  return (
    <>
    <section className="event-search">
            
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Event Manager
                                 {/* <Link to="#" className="btn btn-primary ms-2"> 
                                <i className="fa fa-plus-circle me-2"/>New</Link> */}
                            </p>
                            <p className="fst-italic" ><span className="fw-bold">“Plans are nothing. Planning is everything.”</span>

:: Is there anything more critical to an event planner’s process than planning, planning and planning some more? Having big ideas is great, but they’re nothing without rolling your sleeves up and getting down to the actual planning that goes into any big event or program. And, at the end of the day, that’s everything.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                            <div className="col">
                            <div className="mb-2">
                                    <input
                                        name="text"
                                        value={query.text}
                                        onChange={searchEvents}
                                     type="text" className="form-control" placeholder="search Names"/>
                                </div>
                            </div>
                            <div className="col">
                            <div className="mb-2">
                                <input type="submit" className="btn btn-outline-dark" value="search"/>
                                </div>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="event-list">
                <div className="container">
                    <div className="row">
                    {
                        myArray.length > 0 &&
                        myArray.map(currElm=>{
                                return (
                            <div className="col-md-6" key={currElm.id}>
                            <div className="card my-2">
                                <div className="card-body ">
                                    <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                        <img src={currElm.photo} alt="" className="event-img"/>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Event Name : <span className="fw-bold">{currElm.name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Date : <span className="fw-bold">{currElm.date}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                location : <span className="fw-bold">{currElm.location}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title : <span className="fw-bold">{currElm.title}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-center" >
                                        {/* <Link to={`/events/view/${currElm.id}`} className="btn btn-warning ">
                                            <i className="fa fa-eye"/>
                                        </Link>
                                        <Link to={`/events/edit/${id}`} className="btn btn-primary">
                                            <i className="fa fa-pen"/>
                                        </Link> */}
                                        <button  className="btn btn-danger" onClick={()=>clickDelete(currElm.id)}>
                                            <i className="fa fa-trash"/>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                    }
                   
                    </div>
                </div>
            </section>        
    </>
  )
}

export default Eventslist;
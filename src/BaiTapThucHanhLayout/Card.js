import Img from './Img'
export default function Card(){
    return (
       <div className="card col-sm-6 col-lg-3" style={{width: '15rem'}}>
            <Img/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
        </div>
    )
}
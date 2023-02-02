import {React,Component} from 'react'
import { useParams } from 'react-router-dom'


export default class ProductConfiguration extends Component {
    render() {
      return(
        <div>
          <h2>{this.props.match.params.id}</h2>
        </div>
      )
    }
  }
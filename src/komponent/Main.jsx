import React from 'react'

class Main extends React.Component {

    state={
        daftar : ['asdf','asdfg','asdfgh'],
        tambahan : ''
      }
    
      tampildaftar=()=>{
        var jsx = this.state.daftar.map((val,idx) => {
            return (
                <tr>
                    <td>{idx+1}</td>
                    <td>{val}</td>
                    <td><input type='button' className='btn btn-danger btn-block' onClick={()=>this.hapusdaftar(idx)} value='delete'/></td>
                </tr>
            )
        })

        return jsx
    }

      tambahdaftar=()=>{
          var arrbaru = this.state.daftar
          arrbaru.push(this.state.tambahan)
          this.setState({daftar : arrbaru})
          this.refs.daftarbaru.value=''
      }
    
      hapusdaftar=(i)=>{
        var arrbaru = this.state.daftar
        arrbaru.splice(i,1)
        this.setState({daftar : arrbaru})
      }
    
    render(){
        return(
        <center>
      <div className='container'>
        <h1 className='text-uppercase'>To Do List</h1>
        <table className='table table-dark'>
              <thead className='thead-dark'>
                <th>No. </th>
                <th>Kegiatan </th>
                <th>Delete </th>
              </thead>
              <tbody>
                {this.tampildaftar()}
              </tbody>
              <tfoot>
                  <tr>
                      <td>#</td>
                      <td><input type="text" name="" id="" ref='daftarbaru' onChange={()=>this.setState({tambahan : this.refs.daftarbaru.value})} className='form-control' /></td>
                       <td><input type="button" value="add list" className='btn btn-block btn-primary' onClick={this.tambahdaftar}/></td>            
                  </tr>
              </tfoot>
        </table>
                      <h2>{this.state.daftar.length} List added ! </h2>
      </div>
      </center>
        )}




}

export default Main
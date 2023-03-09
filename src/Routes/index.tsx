import {Routes as Switch,Route}  from 'react-router-dom'
import { Project1 } from '../pages/Project1'
import { Project10 } from '../pages/Project10'
import { Project11 } from '../pages/Project11'
import { Project12 } from '../pages/Project12'
import { Project13 } from '../pages/Project13'
import { Project14 } from '../pages/Project14'
import { Project15 } from '../pages/Project15'
import { Project16 } from '../pages/Project16'
import { Project17 } from '../pages/Project17'
import { Project18 } from '../pages/Project18'
import { Project19 } from '../pages/Project19'
import { Project2 } from '../pages/Project2'
import { Project20 } from '../pages/Project20'
import { Project3 } from '../pages/Project3'
import { Project4 } from '../pages/Project4'
import { Project5 } from '../pages/Project5'
import { Project6 } from '../pages/Project6'
import { Project7 } from '../pages/Project7'
import { Project8 } from '../pages/Project8'
import { Project9 } from '../pages/Project9'
import { ListProject } from '../pages/_ListProject'

export function Routes () {
  return (
    <Switch>
      <Route path="/" element={<ListProject/>} />
      <Route path='project/1' element={<Project1/>}/>
      <Route path='project/2' element={<Project2/>}/>
      <Route path='project/3' element={<Project3/>}/>
      <Route path='project/4' element={<Project4/>}/>
      <Route path='project/5' element={<Project5/>}/>
      <Route path='project/6' element={<Project6/>}/>
      <Route path='project/7' element={<Project7/>}/>
      <Route path='project/8' element={<Project8/>}/>
      <Route path='project/9' element={<Project9/>}/>
      <Route path='project/10' element={<Project10/>}/>
      <Route path='project/11' element={<Project11/>}/>
      <Route path='project/12' element={<Project12/>}/>
      <Route path='project/13' element={<Project13/>}/>
      <Route path='project/14' element={<Project14/>}/>
      <Route path='project/15' element={<Project15/>}/>
      <Route path='project/16' element={<Project16/>}/>
      <Route path='project/17' element={<Project17/>}/>
      <Route path='project/18' element={<Project18/>}/>
      <Route path='project/19' element={<Project19/>}/>
      <Route path='project/20' element={<Project20/>}/>
    </Switch>
  )
}
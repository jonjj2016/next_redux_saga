import React, { useEffect } from 'react';
import {useRouter} from 'next/router';
import Navbar from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../store/actions/project'
import { Image, List, Container } from 'semantic-ui-react'

const Nexto = () => {
  const dispatch = useDispatch();
  const {push} = useRouter()
  const {projects, loading} = useSelector(state=>state.projects)
  useEffect(()=>{
    dispatch(actions.find_start())
  },[]);
  if(loading || !projects) {
    return <h1>Loading</h1>
  }
  const onProjectClicked = (id) => {
    if (!loading) {
      push(`/projects/${id}`)
    }
  }
  return (
    <div>
      <Navbar/>
      <Container>

        <List selection verticalAlign='middle'>
          {
            projects.map(project=>{
              return(
                <List.Item onClick={()=>onProjectClicked(project._id)} key={project._id}>
                  <Image avatar src={project.entityManagementAccountId.entity.logoUrl} />
                  <List.Content>
                    <List.Description>{project.name}</List.Description>
                  </List.Content>
                  <List.Content floated='right'>
                    {project.deadline}
                  </List.Content>
                </List.Item>
            )})
          }
        </List>
      </Container>
    </div>
  )
}

export default Nexto

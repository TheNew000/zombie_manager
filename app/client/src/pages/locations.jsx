import React, { Fragment }  from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Loading } from '../components';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const ZOMBIE_TILE_DATA = gql`
  fragment ZombieTile on Zombie {
    id
    name
    location {
      id
      name
    }
  }
`;

export const GET_ZOMBIES = gql`
  query GetZombieList {
    zombies {
      ...ZombieTile
    }
  }
  ${ZOMBIE_TILE_DATA}
`;

export const MOVE_ZOMBIE = gql`
  mutation moveZombie($zombID: ID!, $locID: ID! ) {
    moveZombie(zombieID: $zombID, locationID: $locID) {
      success
      message
    }
  }
`;

const DropDownItem = ({ key, zID, locID, locName, mutate }) => {
  return (
    <Dropdown.Item 
      key={key} 
      style={{display: "block", background: 'lightgrey', borderBottom: '2px solid black'}}
      onClick={() => mutate({ variables: {
          zombID: zID,
          locID: locID
        }})}
      >
        {locName}
    </Dropdown.Item>)
}

const DropDownEl = ({ zomID, arr, mutate }) => {

  return (
    <DropdownButton 
      id="dropdown-button-dark-example2"
      variant="secondary"
      menuVariant="dark"
      title="Move?"
      mutate={mutate}
      style={{display: 'inline', float: 'right'}}
    >
        {arr.map((loc) => (
          <DropDownItem key={loc.name+zomID} zID={zomID} locID={loc.id} locName={loc.name} mutate={mutate} />
        ))}
    </DropdownButton>
  )
}

const Locations = () => {
  const { data, loading, error } = useQuery(GET_ZOMBIES);
  const [mutate, { load, err }] = useMutation(MOVE_ZOMBIE, {refetchQueries: [{query: GET_ZOMBIES}]});

  let locObj = {};
  let locArr = [];
  if (data) {
    data.zombies.forEach(zombie => {
      if(locObj[zombie.location.name]) {
        locObj[zombie.location.name].push(zombie);
      } else {
        locObj[zombie.location.name] = [zombie];
        locArr.push({name: zombie.location.name, id: zombie.location.id});
      }
    });
  }

  if (loading || load) return <Loading />;
  if (error || err) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {Object.keys(locObj).map((loc, i) => {
              return (<th key={i}><h2>{loc}</h2> Zombie Count: {locObj[loc].length}</th>);
            })}
          </tr>
        </thead>
        <tbody>
        {(<tr>
          {Object.keys(locObj).map((loc, i) => {
                return (<td key={i}>
                  <ListGroup
                    style={{padding: '0 5px 0 5px', borderLeft: '5px solid black', borderRight: '5px solid black'}}>
                    {locObj[loc].map((zom) => {
                      return (<ListGroup.Item 
                        key={zom.id}
                        style={{margin: '10px 0 10px'}}>
                          {zom.name} 
                          <DropDownEl zomID={zom.id} arr={locArr} mutate={mutate} />
                      </ListGroup.Item>)
                    })}
                  </ListGroup>
                </td>)
          })}
        </tr>)}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Locations;
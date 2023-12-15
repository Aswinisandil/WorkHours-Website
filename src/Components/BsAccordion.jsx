import React from 'react';
import { Accordion} from 'react-bootstrap'

const BsAccordion = () => {
  return (
   <Accordion>
      <Accordion.Item eventKey ="0">
         <Accordion.Header>
             Header
         </Accordion.Header>
         <Accordion.Body></Accordion.Body>
      </Accordion.Item>
   </Accordion>
  )
}

export default BsAccordion
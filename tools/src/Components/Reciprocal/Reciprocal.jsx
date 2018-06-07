import React from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Input } from 'semantic-ui-react'
import plane from './plane.svg'
import styled from 'styled-components'
import { calculateReciprocal } from '../../Redux/Reciprocal/ReciprocalReducer'

const ReciprocalComponent = ({ nose, tail, leftWing, rightWing, calculateReciprocal }) => (
  <Container>
    <Grid columns="three">
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <InputField
            placeholder={nose.course}
            type={'number'}
            value={nose.course}
            onChange={(e, d) => calculateReciprocal(d)}
          />
          <Heading>
            <b>{nose.cardinal}</b>
          </Heading>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column verticalAlign={'middle'}>
          <Heading>
            <div>
              <b>{leftWing.course}</b>
            </div>
            <div>
              <b>{leftWing.cardinal}</b>
            </div>
          </Heading>
        </Grid.Column>
        <Grid.Column>
          <StyledImage centered src={plane} size={'small'} />
        </Grid.Column>
        <Grid.Column verticalAlign={'middle'}>
          <Heading>
            <div>
              <b>{rightWing.course}</b>
            </div>
            <div>
              <b>{rightWing.cardinal}</b>
            </div>
          </Heading>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <Heading>
            <div>
              <b>{tail.course}</b>
            </div>
            <div>
              <b>{tail.cardinal}</b>
            </div>
          </Heading>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  </Container>
)

export default connect(
  state => ({
    nose: state.reciprocal.nose,
    tail: state.reciprocal.tail,
    leftWing: state.reciprocal.leftWing,
    rightWing: state.reciprocal.rightWing,
  }),
  {
    calculateReciprocal,
  }
)(ReciprocalComponent)

const StyledImage = styled(Image)`
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
`

const Heading = styled.div`
  font-size: 16px;
`

const Container = styled.div`
  width: 400px;
  margin: auto;
  margin-top: 100px;
`

const InputField = styled(Input)`
  width: 100%;
  font-size: 16px !important;
  font-weight: bold !important;

  input {
    text-align: center !important;
  }
`

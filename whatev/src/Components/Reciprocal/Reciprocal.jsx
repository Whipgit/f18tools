import React from 'react'
import { Grid, Image, Input } from 'semantic-ui-react'
import plane from './plane.svg'
import styled from 'styled-components'

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

export default () => (
  <Container>
    <Grid columns="three">
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <InputField placeholder={360} />
          <Heading>
            <b>North</b>
          </Heading>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column verticalAlign={'middle'}>
          <Heading>
            <div>
              <b>270</b>
            </div>
            <div>
              <b>West</b>
            </div>
          </Heading>
        </Grid.Column>
        <Grid.Column>
          <StyledImage centered src={plane} size={'small'} />
        </Grid.Column>
        <Grid.Column verticalAlign={'middle'}>
          <Heading>
            <div>
              <b>90</b>
            </div>
            <div>
              <b>East</b>
            </div>
          </Heading>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <Heading>
            <div>
              <b>180</b>
            </div>
            <div>
              <b>South</b>
            </div>
          </Heading>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  </Container>
)

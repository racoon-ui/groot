/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Racoon-UI, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Button } from '@racoon-ui/ui-core-material'
import { Grid, GridCell, GridInner } from '@racoon-ui/ui-core-layout-grid'

const styles = theme => ({
  root: {
    // width: '100%'
  },
  button: {
    margin: theme.spacing.unit
  }
})

class Index extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid>
          <GridCell span={4}>1</GridCell>
          <GridCell span={4}>2</GridCell>
          <GridCell span={4}>3</GridCell>
        </Grid>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
        >
          Disabled
        </Button>
        <Button
          variant="contained"
          href="#contained-buttons"
          className={classes.button}
        >
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)

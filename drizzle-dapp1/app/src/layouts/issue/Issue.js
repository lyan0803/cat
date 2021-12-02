import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {Grid, Row, Col, Panel, Alert} from 'react-bootstrap';
import {Radio, FormGroup, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Asset from "./Asset";
import {FaceShape, EyeColor, MouthType} from "../../utils/emojiConst";
import TxInfo from "./TxInfo";

import '../../css/bootstrap/css/bootstrap.min.css';



function AlertMsg(props) {

    if (props.flag) {
        return (
            <Alert bsStyle="danger">
                <strong>You should check at least one option</strong>
            </Alert>
        )
    }
    return <br/>
}



import React , {Component} from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {scroller} from 'react-scroll'
 class SideDrawer extends Component {

     scrollToElement=(element)=>{
         scroller.scrollTo(element,{
             delay:100,
             duration:1500,
             smooth:true
         });
         this.props.onClose(false);
     }

     render() {
         const {open, onClose}= this.props;
         return (
             <Drawer
             anchor="right"
             open={open}
             onClose={()=>{this.props.onClose(false)}}
             >
                <List component="nav">

                    <ListItem
                        button
                        onClick={()=>{this.scrollToElement('home')}}
                    >
                        Home
                    </ListItem>
                    <ListItem
                       button
                       onClick={()=>{this.scrollToElement('sale')}}
                    >
                        Go to the sale
                    </ListItem>
                    <ListItem
                        button
                        onClick={()=>{this.scrollToElement('info')}}
                    >
                        Verona Info
                    </ListItem>
                    <ListItem
                        button
                        onClick={()=>{this.scrollToElement('highlights')}}
                    >
                        Highlights
                    </ListItem>
                    <ListItem
                        button
                        onClick={()=>{this.scrollToElement('pricing')}}
                    >
                        Pricing
                    </ListItem>
                    <ListItem
                        button
                        onClick={()=>{this.scrollToElement('location')}}
                    >
                        Location
                    </ListItem>
                </List>

             </Drawer>
         )


     }
 }
 export default SideDrawer;
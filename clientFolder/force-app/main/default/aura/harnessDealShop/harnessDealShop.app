<!--/*
 * Author: Jacob Schwartz
 * Date: 8/9/2021
 * Project2
 * Description: contains the app initially for testing the 
 * shop component, but is being used as the main app.
 *
 * Contains a header component that has all of the menu items
 * and renders the different components in aura:if statements
 * testing to see if their render bool is true or not. The bool
 * values are set with an event that is fired when a button on
 * the header is clicked.
-->
<aura:application extends="force:slds" access="global" 
                  implements="forceCommunity:availableForAllPageTypes">
    <aura:attribute name="dealRenderBool" type="boolean" default="false" access="global"/>
    <aura:attribute name="testRenderBool" type="boolean" default="false" access="global"/>
    <aura:handler event="c:changeTab" action="{!c.getValueFromApplicationEvent}"/>
    <c:AuraHeader />
    <!--<c:AuraAppointment />-->
    <c:AuraCampaign />
    <aura:if isTrue="{!v.testRenderBool}">
        <c:TestCmp />
    </aura:if>
    <aura:if isTrue="{!v.dealRenderBool}">
    	<c:AuraDealership aura:id="first"/>
    </aura:if>
</aura:application>
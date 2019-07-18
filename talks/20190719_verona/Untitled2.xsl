<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:tei="http://www.tei-c.org/ns/1.0" xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    xmlns="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="xs tei" version="2.0">
    <xsl:output indent="yes"/>
    
    
    
    <!-- copy all -->
    <xsl:template match="@*|node()|comment()" priority="-1">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    
    <xsl:template match="l">
        <xsl:variable name="num">
            <xsl:number level="any" count="l"/>
        </xsl:variable>
        <xsl:element name="{name()}">
            <xsl:attribute name="xml:id">
                <xsl:value-of select="concat(name(),$num) "/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    
    
   <!--  <xsl:template match="w" priority="-1">
        <xsl:variable name="num">
            <xsl:number level="any"/>
        </xsl:variable>
        <xsl:copy>
            <xsl:attribute name="xml:id">
                <xsl:value-of select="concat('w',$num) "/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:copy>
    </xsl:template>
     -->
    
    
    
</xsl:stylesheet>

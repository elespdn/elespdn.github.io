<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tag="http://tag.di.huc.knaw.nl/ns/tag"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output encoding="UTF-8" indent="yes" method="xml"></xsl:output>
    
    
    
    <xsl:template match="/">
        
        <html>
            <body>
                <xsl:apply-templates select="//TAGML"></xsl:apply-templates>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="//TAGML">
        <h1>
            <xsl:value-of select="//title"/>
        </h1>
        
        <xsl:for-each select="//s">
            <br/><br/>
            <span>
                <xsl:apply-templates select="."/>
            </span>
        </xsl:for-each>        
    </xsl:template>
    
    <xsl:template match="//tag:branches">
        <sup style="color:red">
            <xsl:value-of select="./tag:branch[position() = 2]"/>
        </sup>
    </xsl:template>
    
    
    
    
    
</xsl:stylesheet>
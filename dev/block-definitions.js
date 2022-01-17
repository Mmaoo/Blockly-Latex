Blockly.Blocks['document'] = {
  init: function() {
	var lista = new Blockly.FieldDropdown([
		["Artykuł","article"], 
		["Książka","book"], 
		["Prezentacja","beam"], 
		["Inny","other"]],
		function(value){this.sourceBlock_.updateByDropdown(value);});
	
    this.appendDummyInput()
        .appendField("Dokument");
    this.appendDummyInput("type_input")
        .appendField("Typ")
		.appendField(lista, "type");
	this.appendDummyInput()
        .appendField("tytuł")
        .appendField(new Blockly.FieldTextInput(""), "title");
    this.appendDummyInput()
        .appendField("autor")
        .appendField(new Blockly.FieldTextInput(""), "author");
    this.appendDummyInput()
        .appendField("data")
        .appendField(new Blockly.FieldTextInput(""), "date");
    this.appendStatementInput("document_input")
        .setCheck(null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  
  updateByDropdown: function(value){
	  var input = this.getInput('type_input');
	  if(value == 'other'){
		input.appendField(new Blockly.FieldTextInput('klasa'), "type_string");
	  }else{
		input.removeField("type_string",true);
	  }
	  return null;
  }
};

Blockly.Blocks['make_title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Strona tytułowa");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['extend_string'] = {
  init: function() {
    this.appendValueInput("string_input")
        .setCheck(["extend_string","special_character","String"])
        .appendField("\"")
		.appendField(new Blockly.FieldTextInput("tekst"), "text")
		.appendField("\"");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['special_character'] = {
  init: function() {
    this.appendValueInput("string_input")
		.setCheck(["extend_string","special_character","String"])
        .appendField(new Blockly.FieldDropdown([
			["Nowy akapit","p"], 
			["Pozioma linia","hline"], 
			["α","alpha"],
			["β","beta"],
			["γ","gamma"],
			["δ","delta"],
			["λ","lambda"],
			["μ","mu"],
			["π","pi"],
			]), "char");
	this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string_print'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("Text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lista")
        .appendField(new Blockly.FieldDropdown([["Numerowana","numeric"], ["Wypunktowana","dotted"]]), "type");
    this.appendStatementInput("list_input")
		.setCheck(['list_item','list']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  },
}

Blockly.Blocks['list_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lista")
        .appendField(new Blockly.FieldDropdown([["Numerowana","numeric"], ["Wypunktowana","dotted"]]), "type");
    this.appendDummyInput("EMPTY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
	Blockly.Extensions.apply('new_list_create_with_mutator',this,true);
  },
}

Blockly.Blocks['list_item'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("Pozycja listy");
    this.setPreviousStatement(true, ["list", "list_item"]);
    this.setNextStatement(true, ["list", "list_item"]);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tabela")
		.appendField(new Blockly.FieldNumber(1, 1, 20, undefined, this.rowFieldChange_), "row_count")
		.appendField("x")
		.appendField(new Blockly.FieldNumber(1, 1, 20, undefined, this.columnFieldChange_), "column_count");
//    this.appendDummyInput()
//        .appendField("liczba kolumn")
//        .appendField(new Blockly.FieldNumber(0, 0), "column_count");
//    this.appendStatementInput("table_input")
//        .setCheck(null);
	this.appendDummyInput("EMPTY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
 Blockly.Extensions.apply('table_create_with_mutator',this,true);
  },
  
  rowFieldChange_: function(val){
	  if (this.sourceBlock_ == null){return;}
	  this.sourceBlock_.updateShape_(val,undefined);
	},
  columnFieldChange_: function(val){
	  if (this.sourceBlock_ == null){return;}
	  this.sourceBlock_.updateShape_(undefined,val);
    },
};

Blockly.Blocks['table_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wiersz tabeli");
	//this.appendDummyInput("EMPTY");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
 Blockly.Extensions.apply('table_row_create_with_mutator',this,true);
  },
  columnCountChange_: function(val){
	  this.updateShape_(val);
    },
};

Blockly.Blocks['adapter_vs'] = {
  init: function() {
    this.appendStatementInput('statement_input')
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['table_row3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wiersz tabeli");
    this.appendValueInput("table_row_input_0")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 Blockly.Extensions.apply('table_row_create_with_mutator',this,true);
  },
  columnCountChange_: function(val){
	  this.updateShape_(val);
    },
};


Blockly.Blocks['table_row2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wiersz tabeli");
    this.appendValueInput("table_row_input_0")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};











Blockly.Blocks['table3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tabela");
    this.appendStatementInput("table_input")
        .setCheck("table_row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    //Blockly.Extensions.apply('new_table_create_with_mutator',this,true);
  }
};

Blockly.Blocks['table2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tabela");
    this.appendStatementInput("table_input")
        .setCheck("table_row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['table_row_2'] = {
  init: function() {
    this.appendValueInput("table_row_input")
        .setCheck(["String", "extend_string"])
        .appendField("Wiersz tabeli");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['table_column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("liczba zajętych kolumn")
        .appendField(new Blockly.FieldNumber(0, 1), "span");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Wyrównanie do lewej","left"], ["Wyrównanie do prawej","right"], ["Wyrównanie do środka","center"]]), "align");
    this.appendValueInput("string")
        .setCheck(["String", "extend_string"])
        .appendField("tekst");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};








Blockly.Blocks['document2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dokument")
        .appendField(new Blockly.FieldDropdown([["Artykuł","article"], ["Książka","book"], ["Prezentacja","beam"], ["Inny","other"]]), "type");
    this.appendValueInput("type1")
        .setCheck(["String", "extend_string", "document_type_article", "document_type_beam"])
        .appendField("Typ");
    this.appendStatementInput("document_input")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['testowy'] = {
  init: function() {
	  var chckbox = new Blockly.FieldCheckbox("FALSE",
		  function(ischecked) {
			this.sourceBlock_.update(ischecked);
		  });
    this.appendDummyInput()
        .appendField("dokument");
    this.appendDummyInput()
        .appendField("Zaznacz")
        .appendField(chckbox, "chck");
    this.appendStatementInput("document_input")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  /*
  validate: function(a){
	  if(a == true){
		  var field = new Blockly.FieldTextInput("default")
		  var block = this.getSourceBlock;
		  block.appendDummyInput().appendField(field, "type");
	  }
  },
  
  mutationToDom: function() {
	  console.log("toDom");
	  var container = document.createElement('mutation');
	  var chck = (this.getFieldValue('chck') == true);
	  container.setAttribute('chck', chck);
	  return container;
	},
	
  domToMutation: function(xmlElement) {
	  console.log("DomTo: ",xmlElement);
	  var ischecked = (xmlElement.getAttribute('chck') == true);
	  this.updateShape_(ischecked);  // Helper function for adding/removing 2nd input.
	},*/

  update: function(chck) {
	  console.log("update: "+chck);
	  //console.log(this);
    // Add or remove a Value Input.
    if (chck == 'TRUE') {
      this.appendDummyInput("abc")
        .appendField("Tabela");
    } else {
		if(this.getInput("abc") != null)
			this.removeInput("abc");
      /*
	  if (this.childBlocks_.length > 0) {
        for (var i = 0; i < this.childBlocks_.length; i++) {
          if (this.childBlocks_[i].type == 'px') {
            this.childBlocks_[i].unplug();
            break;
          }
        }
      }
      this.removeInput('PX');
    */
	}
  }

};







Blockly.Blocks['en'] = {
  init: function() {
    var checkbox = new Blockly.FieldCheckbox("TRUE",function(pxchecked) {
      this.sourceBlock_.updateShape_(pxchecked);
    });
    this.setInputsInline(false);
    this.appendDummyInput()
       .appendField("Unit")
       .appendField(new Blockly.FieldTextInput("C01"), "ENName");
    this.appendDummyInput()
       .appendField("PX")
       .appendField(checkbox, 'HasPX');
    this.setPreviousStatement(true, ["C", "EN"]);
    this.setNextStatement(true, ["C", "EN"]);
    this.setColour(40);
  },
  /**
   * Create XML to represent whether the 'pxchecked' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var pxchecked = (this.getFieldValue('HasPX') == 'TRUE');
    container.setAttribute('pxchecked', pxchecked);
    return container;
  },
  /**
   * Parse XML to restore the 'pxchecked'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var pxchecked = (xmlElement.getAttribute('pxchecked') == 'true');
    this.updateShape_(pxchecked);
  },
  /**
   * Modify this block to have (or not have) an input for 'HasPX'.
   * @param {boolean} pxchecked True if this block HasPX is pxchecked.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(pxchecked) {
    // Add or remove a Value Input.
    if (pxchecked) {
      this.appendValueInput("PX")
          .setCheck('PX');
    } else {
      if (this.childBlocks_.length > 0) {
        for (var i = 0; i < this.childBlocks_.length; i++) {
          if (this.childBlocks_[i].type == 'px') {
            this.childBlocks_[i].unplug();
            break;
          }
        }
      }
      this.removeInput('PX');
    }
  }
  
  
};

Blockly.Blocks['te'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['te2'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    "type": "lists_create_with_plus_minus",
    "message0": "%{BKY_LISTS_CREATE_EMPTY_TITLE} %1",
    "args0": [
      {
        "type": "input_dummy",
        "name": "EMPTY",
      },
    ],
    "output": "Array",
    "style": "list_blocks",
    "helpUrl": "%{BKY_LISTS_CREATE_WITH_HELPURL}",
    "tooltip": "%{BKY_LISTS_CREATE_WITH_TOOLTIP}",
    "mutator": "new_list_create_with_mutator",
  },
]);
/* eslint-enable quotes */

const listCreateMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 0,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function(targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function() {
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function() {
    if (this.itemCount_ == 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function() {
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
	this.topInput_ = this.appendValueInput('ADD' + this.itemCount_)
          .appendField(createPlusField(), 'PLUS');
//      this.topInput_ = this.appendValueInput('ADD' + this.itemCount_)
//          .appendField(createPlusField(), 'PLUS')
    } else {
      this.appendValueInput('ADD' + this.itemCount_);
    }
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function() {
    this.itemCount_--;
    this.removeInput('ADD' + this.itemCount_);
    if (this.itemCount_ == 0) {
      this.topInput_ = this.appendDummyInput('EMPTY')
          .appendField(createPlusField(), 'PLUS')
          .appendField('Pusta lista');
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function() {
    const minusField = this.getField('MINUS');
    if (!minusField && this.itemCount_ > 0) {
      this.topInput_.insertFieldAt(1, createMinusField(), 'MINUS');
    } else if (minusField && this.itemCount_ < 1) {
      this.topInput_.removeField('MINUS');
    }
  },
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this {Blockly.Block}
 */
const listCreateHelper = function() {
  this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
  this.updateShape_(1);
};

Blockly.Extensions.registerMutator('new_list_create_with_mutator',
    listCreateMutator, listCreateHelper);




const tableCreateMutator2 = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  rowCount_: 0,
  columnCount_: 0,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('rows', this.rowCount_);
	container.setAttribute('columns', this.columnCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    const targetRowCount = parseInt(xmlElement.getAttribute('rows'), 10);
	const targetColumnsCount = parseInt(xmlElement.getAttribute('columns'), 10);
    this.updateShape_(targetRowCount,targetColumnsCount);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function(targetRowCount,targetColumnCount) {
	console.log('updateShape_'+targetRowCount+" "+targetColumnCount);
	if(targetRowCount == null) targetRowCount = this.rowCount_;
	if(targetColumnCount == null) targetColumnCount = this.columnCount_;
	console.log("thisRow="+this.rowCount_+", targetRow="+targetRowCount);
    while (this.rowCount_ < targetRowCount) {
      this.addRow_();
    }
    while (this.rowCount_ > targetRowCount) {
      this.removeRow_();
    }/*
	while (this.columnCount_ < targetColumnCount) {
      this.addColumn_();
    }
    while (this.columnCount_ > targetColumnCount) {
      this.removeRow_();
    }*/
	
    //this.updateMinus_();
  },
  

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
   /*
  plus: function() {
    this.addPart_();
    this.updateMinus_();
  },*/

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
   /*
  minus: function() {
    if (this.itemCount_ == 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },*/

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addRow_: function() {
	var newInput;
    if (this.rowCount_ == 0) {
      this.removeInput('EMPTY');
	  newInput = this.appendValueInput('ROW' + this.rowCount_);
	  this.topInput_ = newInput;
          //.appendField(createPlusField(), 'PLUS');
//      this.topInput_ = this.appendValueInput('ADD' + this.itemCount_)
//          .appendField(createPlusField(), 'PLUS')
    } else {
      newInput = this.appendValueInput('ROW' + this.rowCount_);
    }
	if(!this.isInFlyout){
	  var parentConnection = newInput.connection;
	  childBlock = workspace.newBlock('table_row');
	  childBlock.initSvg();
	  childBlock.render();
	  var childConnection = childBlock.outputConnection;
	  parentConnection.connect(childConnection);
	}
	this.rowCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removeRow_: function() {
	console.log("removeRow"+(this.rowCount_-1));
    this.rowCount_--;
    this.removeInput('ROW' + this.rowCount_);
    if (this.rowCount_ == 0) {
      this.topInput_ = this.appendDummyInput('EMPTY')
          //.appendField(createPlusField(), 'PLUS')
          .appendField('Pusta tabela');
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
   /*
  updateMinus_: function() {
    const minusField = this.getField('MINUS');
    if (!minusField && this.itemCount_ > 0) {
      this.topInput_.insertFieldAt(1, createMinusField(), 'MINUS');
    } else if (minusField && this.itemCount_ < 1) {
      this.topInput_.removeField('MINUS');
    }
  },*/
};

const tableCreateHelper2 = function() {
  //this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
  this.updateShape_(0,0);
};

Blockly.Extensions.registerMutator('table_create_with_mutator2',
    tableCreateMutator2, tableCreateHelper2);	
	
	
	
	
	
	
	
	
const tableCreateMutator = {

  rowCount_: 0,
  columnCount_: 0,

  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('rows', this.rowCount_);
	container.setAttribute('columns', this.columnCount_);
    return container;
  },

  domToMutation: function(xmlElement) {
    const targetRowCount = parseInt(xmlElement.getAttribute('rows'), 10);
	const targetColumnsCount = parseInt(xmlElement.getAttribute('columns'), 10);
    this.updateShape_(targetRowCount,targetColumnsCount);
  },

  updateShape_: function(targetRowCount,targetColumnCount) {
	if(targetRowCount == null) targetRowCount = this.rowCount_;
	if(targetColumnCount == null) targetColumnCount = this.columnCount_;
    while (this.rowCount_ < targetRowCount) {
      this.addRow_();
    }
    while (this.rowCount_ > targetRowCount) {
      this.removeRow_();
    }
	for(i=0;i<this.rowCount_;i++){
	  var connection = this.getInput('ROW'+i).connection;
	  if(connection.isConnected()){
		  connection.targetBlock().columnCountChange_(targetColumnCount);
	  }
	}
	this.columnCount_ = targetColumnCount;
  },
  
  addRow_: function() {
	var newInput;
    if (this.rowCount_ == 0) {
      this.removeInput('EMPTY');
	  newInput = this.appendValueInput('ROW' + this.rowCount_);
	  this.topInput_ = newInput;
    } else {
      newInput = this.appendValueInput('ROW' + this.rowCount_);
    }/*
	if(!this.isInFlyout){
	  var parentConnection = newInput.connection;
	  childBlock = workspace.newBlock('table_row');
	  childBlock.initSvg();
	  childBlock.render();
	  var childConnection = childBlock.outputConnection;
	  parentConnection.connect(childConnection);
	}*/
	this.rowCount_++;
  },

  removeRow_: function() {
    this.rowCount_--;
    this.removeInput('ROW' + this.rowCount_);
    if (this.rowCount_ == 0) {
      this.topInput_ = this.appendDummyInput('EMPTY')
          .appendField('Pusta tabela');
    }
  },
};

const tableCreateHelper = function() {
  this.updateShape_(0,0);
};

Blockly.Extensions.registerMutator('table_create_with_mutator',
    tableCreateMutator, tableCreateHelper);
	
	
	
	
	
	
	


const tableRowCreateMutator = {
	
  columnCount_: 0,

  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
	container.setAttribute('columns', this.columnCount_);
    return container;
  },

  domToMutation: function(xmlElement) {
	const targetColumnCount = parseInt(xmlElement.getAttribute('columns'), 10);
    this.updateShape_(targetColumnCount);
  },

  updateShape_: function(targetColumnCount) {
	  console.log('row updateShape: current='+this.columnCount_+', target='+targetColumnCount);
	while (this.columnCount_ < targetColumnCount) {
      this.addColumn_();
    }
    while (this.columnCount_ > targetColumnCount) {
      this.removeColumn_();
    }
  },
  
  addColumn_: function() {
	var newInput;
	console.log("ADD"+this.columnCount_);
    if (this.columnCount_ == 0) {
      //this.removeInput('EMPTY');
	  newInput = this.appendValueInput('COLUMN' + this.columnCount_);
	  this.topInput_ = newInput;
    } else {
      newInput = this.appendValueInput('COLUMN' + this.columnCount_);
    }
	this.columnCount_++;
  },

  removeColumn_: function() {
    this.columnCount_--;
    this.removeInput('COLUMN' + this.columnCount_);
    if (this.columnCount_ == 0) {
      //this.topInput_ = this.appendDummyInput('EMPTY')
      //    .appendField('Brak kolumn');
    }
  },
  
};

const tableRowCreateHelper = function() {
  this.updateShape_(0);
};

Blockly.Extensions.registerMutator('table_row_create_with_mutator',
    tableRowCreateMutator, tableRowCreateHelper);









function createMinusField(args = undefined) {
  const minus = new Blockly.FieldImage(minusFieldImage, 15, 15, undefined, onClickMinusField_);
  /**
   * Untyped args passed to block.minus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  minus.args_ = args;
  return minus;
}

/**
 * Calls block.minus(args) when the minus field is clicked.
 * @param {Blockly.FieldImage} minusField The field being clicked.
 * @private
 */
function onClickMinusField_(minusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = minusField.getSourceBlock();

  if (block.isInFlyout) {
    return;
  }

  Blockly.Events.setGroup(true);

  const oldMutationDom = block.mutationToDom();
  const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
  
  block.minus(minusField.args_);

  const newMutationDom = block.mutationToDom();
  const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

  if (oldMutation != newMutation) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        block, 'mutation', null, oldMutation, newMutation));
  }
  Blockly.Events.setGroup(false);
}

const minusFieldImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
    'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
    'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
    'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';
	
	
	

function createPlusField(args = undefined) {
  const plus = new Blockly.FieldImage(plusFieldImage, 15, 15, undefined, onClickPlusField_);
  /**
   * Untyped args passed to block.plus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  plus.args_ = args;
  return plus;
}

/**
 * Calls block.plus(args) when the plus field is clicked.
 * @param {!Blockly.FieldImage} plusField The field being clicked.
 * @private
 */
function onClickPlusField_(plusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = plusField.getSourceBlock();

  if (block.isInFlyout) {
    return;
  }

  Blockly.Events.setGroup(true);

  const oldMutationDom = block.mutationToDom();
  const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

  block.plus(plusField.args_);

  const newMutationDom = block.mutationToDom();
  const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

  if (oldMutation != newMutation) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        block, 'mutation', null, oldMutation, newMutation));
  }
  Blockly.Events.setGroup(false);
}

const plusFieldImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
    '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
    'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
    'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
    'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
    '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';





'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handleChooseRandom = _this.handleChooseRandom.bind(_this);
        _this.handleAddNewOption = _this.handleAddNewOption.bind(_this);
        _this.state = {
            options: ['1', '2', '3', '4', '5']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteAll',
        value: function handleDeleteAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleChooseRandom',
        value: function handleChooseRandom() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddNewOption',
        value: function handleAddNewOption(newOption) {

            //the first condition can be automatically handled by HTML's "required" attribute as well, if necessary.
            if (!newOption) {
                return 'Please enter an option to be added.';
            } else if (this.state.options.indexOf(newOption) > -1) {
                return 'Task already Present and Pending!';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(newOption)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = "Helping you in makin'decisions";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { optionsPresent: this.state.options.length > 0, handleChooseRandom: this.handleChooseRandom }),
                React.createElement(Options, { options: this.state.options, handleDeleteAll: this.handleDeleteAll }),
                React.createElement(AddOption, { handleAddNewOption: this.handleAddNewOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            // console.log(this.props);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleChooseRandom, disabled: !this.props.optionsPresent },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            console.log();
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteAll },
                    'Remove all'
                ),

                //Displays each option, as a separate option.
                this.props.options.map(function (option) {
                    return React.createElement(IndividualOption, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var IndividualOption = function (_React$Component5) {
    _inherits(IndividualOption, _React$Component5);

    function IndividualOption() {
        _classCallCheck(this, IndividualOption);

        return _possibleConstructorReturn(this, (IndividualOption.__proto__ || Object.getPrototypeOf(IndividualOption)).apply(this, arguments));
    }

    _createClass(IndividualOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    null,
                    ' ',
                    this.props.optionText
                )
            );
        }
    }]);

    return IndividualOption;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.handleNewOption = _this6.handleNewOption.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'handleNewOption',
        value: function handleNewOption(e) {

            e.preventDefault();
            var option = e.target.elements.newOption.value.trim();
            document.getElementById("newOption").value = "";

            var errorAfterAddOption = this.props.handleAddNewOption(option);

            this.setState(function () {
                return {
                    error: errorAfterAddOption
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleNewOption },
                    React.createElement('input', { type: 'text', placeholder: 'What should I do hmm.?', id: 'newOption', autoComplete: 'off' }),
                    React.createElement(
                        'button',
                        null,
                        'What to do.'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

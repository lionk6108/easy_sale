import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const initialMessages = [
  {
    id: 1,
    sender: 'vendor@example.com',
    receiverId: 1,
    text: 'Bonjour ! Comment puis-je vous aider ?',
    timestamp: new Date().toLocaleTimeString(),
  },
];

const quickRepliesWithResponses = [
  {
    question: 'Est-ce que cet article est toujours disponible ?',
    response: 'Oui, cet article est toujours disponible en stock. Souhaitez-vous passer à l\'étape suivante pour l\'achat ?'
  },
  {
    question: 'Pouvez-vous me donner plus de détails ?',
    response: 'Bien sûr ! Cet article possède les caractéristiques suivantes : [détails du produit]. N\'hésitez pas si vous avez d\'autres questions.'
  },
  {
    question: 'Quel est votre meilleur prix ?',
    response: 'Pour cet article, je peux vous proposer une remise de 5% pour un achat immédiat. Qu\'en pensez-vous ?'
  },
  {
    question: 'Quand êtes-vous disponible ?',
    response: 'Je suis disponible du lundi au vendredi de 9h à 18h pour répondre à vos questions ou organiser une livraison.'
  }
];

const ChatPage = () => {
  const { id } = useParams();
  const currentUser = 'Utilisateur';

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isSellerOnline, setIsSellerOnline] = useState(true);

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSellerOnline(Math.random() > 0.5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    try {
      const userMessage = {
        id: Date.now(),
        sender: currentUser,
        receiverId: parseInt(id || '0'),
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setNewMessage('');

      // Trouver la réponse automatique correspondante
      const quickReply = quickRepliesWithResponses.find(
        reply => reply.question === userMessage.text
      );

      setTimeout(() => {
        const sellerResponse = {
          id: Date.now() + 1,
          sender: 'vendor@example.com',
          receiverId: 1,
          text: quickReply ? quickReply.response : 'Merci pour votre message. Je reviendrai vers vous dès que possible.',
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, sellerResponse]);
      }, 1000);
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
    }
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-10">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Chat avec le vendeur
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ID: {id}
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isSellerOnline
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
            }`}
          >
            {isSellerOnline ? 'En ligne' : 'Hors ligne'}
          </span>
        </div>

        <div
          ref={chatContainerRef}
          className="h-96 overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 p-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.sender === currentUser ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`inline-block max-w-[80%] px-5 py-3 rounded-xl shadow-md ${
                  message.sender === currentUser
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <p
                  className={`break-words ${
                    message.sender === currentUser ? 'text-white' : 'text-gray-800 dark:text-white'
                  }`}
                >
                  {message.text}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Réponses rapides :</p>
          <div className="flex flex-wrap gap-3">
            {quickRepliesWithResponses.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply.question)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {reply.question}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            placeholder="Tapez votre message..."
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;